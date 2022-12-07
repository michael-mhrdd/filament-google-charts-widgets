@php
    $heading = $this->getHeading();
@endphp

<x-filament::widget class="filament-widgets-chart-widget">
    <x-filament::card>
        @if ($heading)
            <div class="flex items-center justify-between gap-8">
                @if ($heading)
                    <x-filament::card.heading>
                        {{ $heading }}
                    </x-filament::card.heading>
                @endif
            </div>

            <x-filament::hr />
        @endif

        <div {!! ($interval = $this->getPollingInterval()) ? "wire:poll.{$interval}=\"updateChart\"" : '' !!}>
            <div id="chart-wrapper">
                <google-chart
                    id='filament-google-charts'
                    type='{{ $this->getType() }}'
                    options='{{ json_encode($this->getOptions()) }}'
                    data='{{ json_encode($this->getCachedData()) }}'>
                </google-chart>
            </div>
        </div>
    </x-filament::card>
</x-filament::widget>
