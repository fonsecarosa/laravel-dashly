<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Theme CSS -->
    <link rel="stylesheet" href="./assets/css/theme.bundle.css" id="stylesheetLTR">
    <link rel="stylesheet" href="./assets/css/theme.rtl.bundle.css" id="stylesheetRTL">

    <title>{{ $title ?? 'Page Title' }}</title>
</head>

<body>
    
    <div class="container">

            {{ $slot }}

    </div>


    <!-- JAVASCRIPT-->
    <!-- Theme JS -->
    <script src="./assets/js/theme.bundle.js"></script>

</body>

</html>
