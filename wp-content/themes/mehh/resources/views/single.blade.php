@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
  <div class="wrap container" role="document">
    <div class="content">
      <div class="main-content-wrapper">

        @if(has_post_thumbnail())
          <div class="top-image">
            {!! get_the_post_thumbnail(null,'top_image') !!}
          </div>
        @endif

        @includeFirst(['partials.content-single-' . get_post_type(), 'partials.content-single'])
      </div>
    </div>
  </div>
  @endwhile
@endsection
