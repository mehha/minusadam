<form role="search" method="get" class="search-form" action="{{ home_url('/') }}">
  <label class="form-label">
    <span class="visually-hidden">
      {{ _x('Search for:', 'label', 'sage') }}
    </span>

    <input
      type="search"
      class="px-3 py-1"
      placeholder="{!! esc_attr_x('Search &hellip;', 'placeholder', 'sage') !!}"
      value="{{ get_search_query() }}"
      name="s"
    >
  </label>

  <input
    type="search"
    class="form-control ms-0"
    value="{{ esc_attr_x('Search', 'submit button', 'sage') }}"
  >
</form>
