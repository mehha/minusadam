<div class="mx-auto max-w-7xl px-4">
  <div class="flex items-center justify-between py-6 md:justify-start md:space-x-10">
    <div class="flex justify-start lg:w-0 lg:flex-1 gap-4 items-center">
      <a class="brand" href="{{ home_url('/') }}">
        <span class="sr-only">{{ $siteName }}</span>
        <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
      </a>
      @php(dynamic_sidebar('sidebar-header'))
    </div>
    <div class="-my-2 -mr-2 md:hidden">
      <button id="burger" type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
        <span class="sr-only">Open menu</span>
        <!-- Heroicon name: outline/bars-3 -->
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>

    @if (has_nav_menu('primary_navigation'))
      <nav class="nav-primary hidden md:block" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav hidden space-x-10 md:flex', 'echo' => false]) !!}
      </nav>
    @endif
  </div>
</div>
