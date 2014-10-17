/**
 * Wrestlemania Main Event JavaScript/AngularJS file
 *
 * @author Craig R Morton <crmpicco@aol.co.uk>
 * @date 06-Aug-2014
 */

$.cloudinary.config().cloud_name = 'wrestlemania-main-event';

// AngularJS
var app = angular.module('MainEventApp', ['cloudinary']);

app.service('MainEventRepository', ['$http', function ($http) {

    this.$http = $http;

    this.getMainEvents = function () {

        return this.$http.get('/main_events.json').then(function(response) {
            return response.data;
        });

    };

}]);

app.controller("MainEventCtrl", ['$scope', 'MainEventRepository', function ($scope, MainEventRepository) {

    MainEventRepository.getMainEvents().then(function (data) {
        $scope.main_events = data;
    });

    // get the URL to use as the background image for each carousel slide
    $scope.getUrl = function (main_event_id) {

        // get the URL from the Cloudinary CDN for the image's public ID
        var cldUrl = $.cloudinary.url("mania" + main_event_id,
            {
                format: "jpg",
                crop: "fill",
                width: 800,
                height: 559,
                quality: 60
            });

        return {'background-image': 'url(' + cldUrl + ')'};
    }

}]);

// jQuery
$(document).ready(function () {
    // to activate the carousel
    $('.carousel').carousel({
        interval: 5000 // changes the speed
    });
    $("#mania_carousel").touchwipe({
        wipeLeft: function () {
            $('#mania_carousel').carousel('next');
        },
        wipeRight: function () {
            $('#mania_carousel').carousel('prev');
        },
        min_move_x: 20,
        preventDefaultEvents: false
    });

    // click handler for the arrow icon to scroll to the top of the container section (where the text starts)
    $('.arrow-wrap').click(function (event) {
        // Preventing default action of the event
        event.preventDefault();
        $('html, body').animate({scrollTop: $(".container").position().top}, "slow");
    });

});

// Down arrow scroll indicator
// this is where we apply opacity to the arrow
$(window).scroll(function () {
    // get scroll position
    var topWindow = $(window).scrollTop();
    // multiply by 1.5 so the arrow will become transparent half-way up the page
    var topWindow = topWindow * 1.5;

    // get height of window
    var windowHeight = $(window).height();

    // set position as percentage of how far the user has scrolled
    var position = topWindow / windowHeight;
    // invert the percentage
    position = 1 - position;

    // define arrow opacity as based on how far up the page the user has scrolled
    // no scrolling = 1, half-way up the page = 0
    $('.arrow-wrap').css('opacity', position);
});