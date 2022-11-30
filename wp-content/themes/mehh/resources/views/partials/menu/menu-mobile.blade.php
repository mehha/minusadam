<div id="mobile-menu" class="absolute inset-x-0 top-0 p-2 hidden md:hidden">
  <div class="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
    <div class="px-5 pt-5 pb-6">
      <div class="flex items-center justify-between">
        <div>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
        </div>
        <div class="-mr-2">
          <button id="burger-2" type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Close menu</span>
            <!-- Heroicon name: outline/x-mark -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    @if (has_nav_menu('primary_navigation'))
      <nav class="nav-primary space-y-6 py-6 px-5" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'grid grid-cols-1 gap-y-4 gap-x-8', 'echo' => false]) !!}
      </nav>
    @endif
  </div>
</div>
