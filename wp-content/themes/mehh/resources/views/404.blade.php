@extends('layouts.app')

@section('content')
  <div class="wrap container" role="document">
    <div class="content">
      <div class="main-content-wrapper">
        @include('partials.page-header')

        @if (! have_posts())
          <x-alert type="warning">
            {!! __('Sorry, but the page you are trying to view does not exist.', 'sage') !!}
          </x-alert>

          {!! get_search_form(false) !!}
        @endif
      </div>
    </div>
  </div>
@endsection
