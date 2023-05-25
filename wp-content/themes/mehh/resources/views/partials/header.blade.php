<header class="banner fixed-top">

  @if (has_nav_menu('top_navigation'))
    <nav class="navbar navbar-top d-none d-lg-flex navbar-expand-lg">
      <div class="container">
          <div id="navbarPrimary" class="collapse navbar-collapse justify-content-end" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
            {!! wp_nav_menu(['theme_location' => 'top_navigation', 'menu_class' => 'navbar-nav me-auto mb-2 mb-lg-0', 'anchor_class' => 'nav-link', 'echo' => false]) !!}
          </div>
      </div>
    </nav>
  @endif

  <div class="navbar-middle bg-white container">
    @php(dynamic_sidebar('sidebar-header'))
  </div>

  <nav class="navbar navbar-primary navbar-expand-lg">
    <div class="container">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrimary" aria-controls="navbarPrimary" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      @if (has_nav_menu('primary_navigation'))
        <div id="navbarPrimary" class="collapse navbar-collapse justify-content-between" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
          {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'navbar-nav me-auto mb-2 mb-lg-0', 'anchor_class' => 'nav-link', 'echo' => false]) !!}

          <div class="language-switcher d-flex gap-2 small mb-3 mb-lg-0">
            @if(function_exists( 'the_msls' )) {{the_msls()}} @endif
          </div>

        </div>
      @endif

    </div>
  </nav>
</header>
