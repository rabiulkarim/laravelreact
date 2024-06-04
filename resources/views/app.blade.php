<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Libs CSS -->
        <link rel="stylesheet" href="./assets/css/libs.bundle.css">
        <!-- Theme CSS -->
        <link rel="stylesheet" href="./assets/css/theme.bundle.css">
        <style>
            .collapse {
                visibility: visible !important;
            }
        </style>
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia


        <!-- Vendor JS -->
        <script src="./assets/js/vendor.bundle.js"></script>
        <!-- Theme JS -->
        <script src="./assets/js/theme.bundle.js"></script>
    </body>
</html>
