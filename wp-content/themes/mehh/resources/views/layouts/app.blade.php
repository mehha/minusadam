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

{{-- Always in the HTML: pages are cached for every visitor, so cookie_banner.js decides whether to show it. --}}
@include('components.cookie-banner')
