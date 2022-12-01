<header class="banner fixed-top">
  <nav class="navbar navbar-primary navbar-expand-lg bg-light">
    <div class="container">

      <a class="navbar-brand" href="{{ home_url('/') }}">{{$siteName}}</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrimary" aria-controls="navbarPrimary" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      @if (has_nav_menu('primary_navigation'))
        <div id="navbarPrimary" class="collapse navbar-collapse justify-content-end" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'navbar-nav me-auto mb-2 mb-lg-0', 'anchor_class' => 'nav-link', 'echo' => false]) !!}
        </div>
      @endif

    </div>
  </nav>
</header>
