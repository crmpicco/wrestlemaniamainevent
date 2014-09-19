/**
 * Wrestlemania Main Event JavaScript/AngularJS file
 *
 * @author Craig R Morton <crmpicco@aol.co.uk>
 * @date 06-Aug-2014
 */

//$.cloudinary.config('cloud_name', 'wrestlemania-main-event');
$.cloudinary.config().cloud_name = 'wrestlemania-main-event';

// AngularJS
var app = angular.module('MainEventApp', ['cloudinary']);
app.controller("MainEventCtrl", function ($scope) {
    // @TODO pull these from a database table or a flat file
    $scope.main_events = [
        {
            id: 1,
            roman_numeral: 'I',
            name: 'Hulk Hogan & Mr T vs Rowdy Roddy Piper & Paul Orndorff',
            venue: 'Madison Square Garden',
            state: 'New York',
            attendance: 19121
        },
        {
            id: 2,
            roman_numeral: 'II',
            name: 'Hulk Hogan vs King Kong Bundy',
            venue: 'Split-Transmission',
            state: 'New York/Illinois/California',
            attendance: 40085
        },
        {
            id: 3,
            roman_numeral: 'III',
            name: 'Hulk Hogan vs Andre The Giant',
            venue: 'Silverdome',
            state: 'Michigan',
            attendance: 93173
        },
        {
            id: 4,
            roman_numeral: 'IV',
            name: 'Macho Man Randy Savage vs Million Dollar Man Ted DiBiase',
            venue: 'Trump Plaza',
            state: 'New Jersey',
            attendance: 18165
        },
        {
            id: 5,
            roman_numeral: 'V',
            name: 'Macho Man Randy Savage vs Hulk Hogan',
            venue: 'Trump Plaza',
            state: 'New Jersey',
            attendance: 18946
        },
        {
            id: 6,
            roman_numeral: 'VI',
            name: 'Hulk Hogan vs Ultimate Warrior',
            venue: 'SkyDome',
            state: 'Ontario, Canada',
            attendance: 67678
        },
        {
            id: 7,
            roman_numeral: 'VII',
            name: 'Hulk Hogan vs Sgt. Slaughter',
            venue: 'Los Angeles Memorial Sports Arena',
            state: 'California',
            attendance: 16158
        },
        {
            id: 8,
            roman_numeral: 'VIII',
            name: 'Hulk Hogan vs Sid Justice',
            venue: 'Hoosier Dome',
            state: 'Indiana',
            attendance: 62167
        },
        {
            id: 9,
            roman_numeral: 'IX',
            name: 'Yokozuna vs Bret Hart',
            venue: 'Caesars Palace',
            state: 'Nevada',
            attendance: 16891
        },
        {
            id: 10,
            roman_numeral: 'X',
            name: 'Yokozuna vs Bret Hart',
            venue: 'Madison Square Garden',
            state: 'New York',
            attendance: 18065
        },
        {
            id: 11,
            roman_numeral: 'XI',
            name: 'Lawrence Taylor vs Bam Bam Bigelow',
            venue: 'Hartford Civic Center',
            state: 'Connecticut',
            attendance: 16305
        },
        {
            id: 12,
            roman_numeral: 'XII',
            name: 'Bret Hart vs Shawn Michaels',
            venue: 'Arrowhead Pond of Anaheim',
            state: 'California',
            attendance: 18853
        },
        {
            id: 13,
            roman_numeral: 'XIII',
            name: 'Sid Justice vs Undertaker',
            venue: 'Rosemount Horizon',
            state: 'Illinois',
            attendance: 18197
        },
        {
            id: 14,
            roman_numeral: 'XIV',
            name: 'Shawn Michaels vs Stone Cold Steve Austin',
            venue: 'FleetCenter',
            state: 'Massachusetts',
            attendance: 19028
        },
        {
            id: 15,
            roman_numeral: 'XV',
            name: 'Stone Cold Steve Austin vs The Rock',
            venue: 'First Union Center',
            state: 'Pennsylvania',
            attendance: 20276
        },
        {
            id: 16,
            roman_numeral: 'XVI',
            name: 'Triple H vs The Rock vs Big Show vs Mick Foley',
            venue: 'Arrowhead Pond of Anaheim',
            state: 'California',
            attendance: 18034
        },
        {
            id: 17,
            roman_numeral: 'XVII',
            name: 'The Rock vs Stone Cold Steve Austin',
            venue: 'Reliant Astrodome',
            state: 'Texas',
            attendance: 67925
        },
        {
            id: 18,
            roman_numeral: 'XVIII',
            name: 'Chris Jericho vs Triple H',
            venue: 'SkyDome',
            state: 'Ontario, Canada',
            attendance: 68237
        },
        {
            id: 19,
            roman_numeral: 'XIX',
            name: 'Kurt Angle vs Brock Lesnar',
            venue: 'Safeco Field',
            state: 'Washington',
            attendance: 54097
        },
        {
            id: 20,
            roman_numeral: 'XX',
            name: 'Triple H vs Shawn Michaels vs Chris Benoit',
            venue: 'Madison Square Garden',
            state: 'New York',
            attendance: 18000
        },
        {
            id: 21,
            roman_numeral: 'XXI',
            name: 'Triple H vs Batista',
            venue: 'Staples Center',
            state: 'California',
            attendance: 20193
        },
        {
            id: 22,
            roman_numeral: 'XXII',
            name: 'John Cena vs Triple H',
            venue: 'Allstate Arena',
            state: 'Illinois',
            attendance: 17159
        },
        {
            id: 23,
            roman_numeral: 'XXIII',
            name: 'John Cena vs Shawn Michaels',
            venue: 'Ford Field',
            state: 'Michigan',
            attendance: 80103
        },
        {
            id: 24,
            roman_numeral: 'XXIV',
            name: 'Edge vs Undertaker',
            venue: 'Citrus Bowl',
            state: 'Florida',
            attendance: 74635
        },
        {
            id: 25,
            roman_numeral: 'XXV',
            name: 'Triple H vs Randy Orton',
            venue: 'Reliant Stadium',
            state: 'Texas',
            attendance: 72744
        },
        {
            id: 26,
            roman_numeral: 'XXVI',
            name: 'John Cena vs Batista',
            venue: 'University of Phoenix Stadium',
            state: 'Arizona',
            attendance: 72219
        },
        {
            id: 27,
            roman_numeral: 'XXVII',
            name: 'John Cena vs The Miz',
            venue: 'Georgia Dome',
            state: 'Georgia',
            attendance: 71617
        },
        {
            id: 28,
            roman_numeral: 'XXVIII',
            name: 'John Cena vs The Rock',
            venue: 'Sun Life Stadium',
            state: 'Florida',
            attendance: 78363
        },
        {
            id: 29,
            roman_numeral: 'XXIX',
            name: 'John Cena vs The Rock',
            venue: 'MetLife Stadium',
            state: 'New Jersey',
            attendance: 80676
        },
        {
            id: 30,
            roman_numeral: 'XXX',
            name: 'Batista vs Randy Orton vs Daniel Bryan',
            venue: 'Mercedes-Benz Superdome',
            state: 'Louisiana',
            attendance: 75167
        }
    ]
    ;
})
;

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
        $('html, body').animate({ scrollTop: $(".container").position().top }, "slow");
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