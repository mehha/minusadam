@if(isset($hide_title))
  @if(! $hide_title)
    <div class="page-header">
      <h1>{!! $title !!}</h1>
    </div>
  @else
    {{-- The title is hidden on this page, but it still needs an H1 for screen readers and search engines. --}}
    <h1 class="visually-hidden">@if(is_front_page()){{ $front_page_title }}@else{!! $title !!}@endif</h1>
  @endif
@endif
