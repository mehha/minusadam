#!/usr/bin/env bash
# Import a production DB dump into the local Docker DB and rewrite URLs/paths for local use.
# Usage: docker/db-import.sh path/to/dump.sql[.gz|.zip]
set -euo pipefail
cd "$(dirname "$0")/.."

dump="${1:?Usage: docker/db-import.sh path/to/dump.sql[.gz|.zip]}"
[ -f "$dump" ] || { echo "No such file: $dump" >&2; exit 1; }

new_host=$(/usr/bin/grep -E '^SITE_HOST=' .env 2>/dev/null | cut -d= -f2- || true)
new_host=${new_host:-minusadam.test}
prefix=$(sed -nE "s/^\\\$table_prefix *= *'([^']+)'.*/\1/p" wp-config.php)
prefix=${prefix:-wp_}

stream() {
  case "$dump" in
    *.gz)  gunzip -c "$dump" ;;
    *.zip) unzip -p "$dump" ;;
    *)     cat "$dump" ;;
  esac
}
sql() { docker compose exec -T db mariadb -uroot -proot "$@"; }
wp()  { docker compose exec -T -u www-data wordpress wp --url="http://$new_host/" "$@"; }

echo "==> Starting containers"
docker compose up -d --wait db wordpress

echo "==> Recreating database"
sql -e "DROP DATABASE IF EXISTS wordpress;
        CREATE DATABASE wordpress CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
        GRANT ALL ON wordpress.* TO 'wordpress'@'%';"

echo "==> Importing $dump"
stream | sql wordpress

old_host=$(sql -N wordpress -e "SELECT domain FROM ${prefix}site WHERE id = 1")
bare=${old_host#www.}
echo "==> Network domain: $old_host -> $new_host"

sql wordpress -e "UPDATE ${prefix}site SET domain = '$new_host';
                  UPDATE ${prefix}blogs SET domain = '$new_host' WHERE domain IN ('$bare', 'www.$bare');"

echo "==> Rewriting URLs"
for scheme in https http; do
  for host in "www.$bare" "$bare"; do
    wp search-replace "$scheme://$host" "http://$new_host" --all-tables --report-changed-only
    wp search-replace "$scheme:\\/\\/$host" "http:\\/\\/$new_host" --all-tables --report-changed-only
  done
done

# Production docroot as stored in the dump (Zone.ee layout), e.g. /data01/virt123/domeenid/www.minusadam.com/htdocs
prod_path=$(stream | /usr/bin/grep -a -o -m1 -E '/data[0-9]+/virt[0-9]+/domeenid/[^/"\\ ]+/htdocs' || true)
if [ -n "$prod_path" ]; then
  echo "==> Rewriting server paths: $prod_path -> /var/www/html"
  wp search-replace "$prod_path" /var/www/html --all-tables --report-changed-only
else
  echo "==> No production server path found in the dump, skipping path rewrite"
fi

wp cache flush

echo "==> Sites"
sql -t wordpress -e "SELECT blog_id, domain, path, public, archived, deleted FROM ${prefix}blogs"
echo "==> Super admins"
wp super-admin list
echo
echo "Done: http://$new_host/"
