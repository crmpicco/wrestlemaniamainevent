<?php
/**
 * Wrestlemania Main Event main script
 *
 * @author Craig R Morton <crmpicco@aol.co.uk>
 * @date   11-Aug-2014
 */
?>
<!DOCTYPE html>
<html>
<head>
    <meta name="keywords" content="wrestlemania, wwe, main event, wwf">
    <meta name="description" content="Wrestlemania Main Events">
    <title>Wrestlemania Main Event</title>

    <!-- Google-hosted AngularJS JavaScript -->
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/full-slider.css" rel="stylesheet">

    <!-- jQuery Version 1.11.0 -->
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>

    <!-- jQuery Touchwipe plugin for touch support for carousel -->
    <script src="js/jquery.touchwipe.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

    <script src="js/wrestlemania_main_event.js"></script>

    <link href="css/wrestlemania_main_event.css" rel="stylesheet">
</head>

<body ng-controller="MainEventCtrl" ng-app="MainEventApp">

<!-- Full Page Image Background Carousel Header -->
<header id="mania_carousel" class="carousel slide">
    <!-- Indicators -->
    <ol class="carousel-indicators" style="display: none;">
        <li data-target="#mania_carousel" data-slide-to="0" class="active"></li>
        <li data-target="#mania_carousel" data-slide-to="1"></li>
        <li data-target="#mania_carousel" data-slide-to="2"></li>
    </ol>

    <!-- Wrapper for Slides -->
    <div class="carousel-inner">

        <div ng-class="{'active': main_event.id == 1}" class="item" ng-repeat='main_event in main_events'
             data-mania="{{main_event.id}}">
            <div class="fill" style="background-image:url('/images/mania{{main_event.id}}.jpg');"></div>
            <div class="carousel-caption">
                <h2>WrestleMania <span class="roman">{{ main_event.roman_numeral }}</span></h2>

                <h3>{{ main_event.name }}</h3>
            </div>
        </div>

    </div>

    <!-- Controls -->
    <a class="left carousel-control" href="#mania_carousel" data-slide="prev">
        <span class="icon-prev"></span>
    </a>
    <a class="right carousel-control" href="#mania_carousel" data-slide="next">
        <span class="icon-next"></span>
    </a>

</header>

<!-- Page Content -->
<div class="container">
    <br/>

    <div class="row">

        <div class="col-lg-12">

            <a href="https://twitter.com/maniamainevent" class="twitter-follow-button" data-show-count="true"
               data-size="large">Follow @maniamainevent</a>
            <script>!function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
                    if (!d.getElementById(id)) {
                        js = d.createElement(s);
                        js.id = id;
                        js.src = p + '://platform.twitter.com/widgets.js';
                        fjs.parentNode.insertBefore(js, fjs);
                    }
                }(document, 'script', 'twitter-wjs');</script>

        </div>
    </div>

    <?php include_once('inc/google_adwords.php'); ?>

    <hr>

    <!-- Footer -->
    <footer>
        <div class="row">
            <div class="col-lg-12">
                <p>Copyright &copy; WWE 2014</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <p>site by <a target="_blank" href="http://www.crmpicco.co.uk/?refer=mania_main_event">Craig R
                        Morton</a></p>
            </div>
        </div>
    </footer>

</div>
<!-- /.container -->

<?php include_once('inc/universal_analytics.php'); ?>

</body>
</html>