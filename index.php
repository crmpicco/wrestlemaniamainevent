<?php
/**
 * Wrestlemania Main Event main script
 *
 * @author Craig R Morton <crmpicco@aol.co.uk>
 * @date   11-Aug-2014
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="author" content="Craig R Morton">
    <meta name="keywords"
          content="wrestlemania, wwe, main events, wwf, wrestling, the rock, john cena, triple h, stone cold">
    <meta name="description"
          content="Wrestlemania Main Events - a showcase of the main events of WrestleMania over the years">
    <meta name="viewport" content="width=device-width, initial-scale=1.0;">
    <title>WrestleMania Main Event: A showcase of the main events of WrestleMania over the years</title>

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

    <!-- custom WME JavaScript -->
    <script src="js/wrestlemania_main_event.js"></script>

    <!-- Google Fonts for Anton and Open Sans fonts -->
    <link href='http://fonts.googleapis.com/css?family=Anton' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,300' rel='stylesheet' type='text/css'>

    <!-- custom WME CSS -->
    <link href="css/wrestlemania_main_event.css" rel="stylesheet">

    <!-- SEO Canonical Tag -->
    <link rel="canonical" href="http://www.wrestlemaniamainevent.com"/>
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
             data-mania="{{main_event.id}}" itemscope itemtype="http://schema.org/SportsEvent">
            <div class="fill"
                 style="background-image:url('http://i26.photobucket.com/albums/c103/crmpicco/WME/mania{{main_event.id}}.jpg');"></div>
            <div class="carousel-caption">
                <h2 itemprop="name">WrestleMania <span class="roman">{{ main_event.roman_numeral }}</span></h2>

                <div itemscope itemtype="http://schema.org/Person">
                    <h3 itemprop="name">{{ main_event.name }}</h3>
                </div>

                <div class="venue_info">
                    <h4>{{ main_event.venue }}, {{ main_event.state }}</h4>
                    <h5>Attendance: {{ main_event.attendance | number }}</h5>
                </div>
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

    <div class="twitter_container">
        <a href="https://twitter.com/maniamainevent" class="twitter-follow-button" data-show-count="true"
           data-size="medium">Follow @maniamainevent</a>
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

    <?php include_once('inc/google_adwords.php'); ?>

    <hr>

    <!-- Footer -->
    <footer>
        <div class="row pull-left">
            <div class="col-lg-12">
                <p>Copyright &copy; WWE 2014</p>
            </div>
        </div>
        <div class="clearfix"></div>
        <div class="row pull-left">
            <div class="col-lg-12">
                <p>site by <a target="_blank" href="http://www.crmpicco.co.uk/?refer=mania_main_event">Craig R
                        Morton</a></p>
            </div>
        </div>
        <div class="row pull-right tech_notes">
            built with AngularJS and Bootstrap
        </div>
        <div class="clearfix"></div>
        <div class="row pull-left small">
            <div class="col-lg-12">
                All images appearing on this website are the exclusive property of World Wrestling Entertainment, Inc.
            </div>
        </div>
    </footer>

</div>
<!-- /.container -->

<?php include_once('inc/universal_analytics.php'); ?>

</body>
</html>