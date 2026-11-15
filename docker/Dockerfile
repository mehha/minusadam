ARG PHP_VERSION=8.4
FROM wordpress:php${PHP_VERSION}-apache

# The project .htaccess uses Header outside <IfModule>, so mod_headers is required.
RUN a2enmod headers rewrite expires \
 && echo "ServerName localhost" > /etc/apache2/conf-available/servername.conf \
 && a2enconf servername

RUN apt-get update \
 && apt-get install -y --no-install-recommends mariadb-client less unzip \
 && rm -rf /var/lib/apt/lists/*

RUN pecl install xdebug && docker-php-ext-enable xdebug

RUN curl -fsSL -o /usr/local/bin/wp https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
 && chmod +x /usr/local/bin/wp

# Composer runs in the container so dependencies resolve against the same PHP as production
# and Acorn's post-autoload-dump (wp acorn …) can run. Use: docker compose exec -w <theme dir> wordpress composer …
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

# mailpit binary acts as sendmail, so PHP mail() goes to the mailpit container.
COPY --from=axllent/mailpit:latest /mailpit /usr/local/bin/mailpit

COPY php.ini /usr/local/etc/php/conf.d/zz-local.ini
