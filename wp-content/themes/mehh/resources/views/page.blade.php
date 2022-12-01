@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    <div class="wrap container" role="document">
      <div class="content">

        @if(has_post_thumbnail())
          <div class="top-image">
            {!! get_the_post_thumbnail(null,'top_image') !!}
          </div>
        @endif

        <div class="main-content-wrapper">
          @include('partials.page-header')
          @includeFirst(['partials.content-page', 'partials.content'])
        </div>
      </div>
    </div>
  @endwhile
@endsection
