<!doctype html>
<html >
<head>
    <meta name="google-site-verification" content="M02GNeZ8rP6-Or9mT-vXmCLybydwiPT6zapodI06HYQ" />
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Custom App</title>
    <link rel="icon" href="{!! url('images/favico.png') !!}"/>
    <link rel="stylesheet" type="text/css" href="{{ url('css/app.css?ver='.$app["ver"]) }}">
    <link rel="stylesheet" type="text/css" href="{{ url('css/app-v1.css?ver='.$app["ver"]) }}">
    <script type="text/javascript">
        var app = @json($app);
        app["css"] ={
            textHightLightColor: "#FE3C00"
        }
    </script>
</head>
<body>

<div id="app"></div>


{{--APP css--}}
{{--<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>--}}
{{--<script type="text/javascript" src="{{ asset('js/index.js') }}"></script>--}}
{{--<script type="text/javascript" src="{{ asset('js/vendor.js') }}"></script>--}}
{{--<script type="text/javascript" src="{{ asset('js/manifest.js') }}"></script>--}}
<script type="text/javascript" src="{{ asset('js/index.js?ver='.$app["ver"]) }}"></script>
<script type="text/javascript" src="{{ asset('js/vendor.js?ver='.$app["ver"]) }}"></script>
<script type="text/javascript" src="{{ asset('js/manifest.js?ver='.$app["ver"]) }}"></script>

</body>
</html>
