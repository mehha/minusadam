<a class="visually-hidden-focusable skip-to-content" href="#main">
  {{ __('Skip to content') }}
</a>

@include('partials.header')

  <main id="main" class="main">
    @yield('content')
  </main>

  @hasSection('sidebar')
    <aside class="sidebar">
      @yield('sidebar')
    </aside>
  @endif

@include('partials.footer')

@if(!isset($_COOKIE['cookies_accepted']))
  @include('components.cookie-banner')
@endif
