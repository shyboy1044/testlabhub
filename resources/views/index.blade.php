{{-- <!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <!-- Styles -->


    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    @viteReactRefresh
    @vite(["resources/js/index.css", "resources/js/index.tsx"])
</head>
<body>
<div id="app"></div>
</body>
</html> --}}
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="build/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="theme-color" content="#000000" />
        <meta
            name="description"
            content="Chisfis | Online Booking – a responsive React template theme with Online booking, Real Estate, and booking system for accommodation, tours, travel experiences, cruises, car rentals, real estate, and travel agencies"
        />
        <link rel="apple-touch-icon" href="build/logo192.png" />
        <link rel="manifest" href="build/manifest.json" />
        <title>Testlabhub</title>
        <script src="https://accounts.google.com/gsi/client" async defer></script>

        <script defer="defer" src="/build/static/js/main.f0145245.js"></script>
        <link href="/build/static/css/main.e42168aa.css" rel="stylesheet" />
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
    </body>
</html>
