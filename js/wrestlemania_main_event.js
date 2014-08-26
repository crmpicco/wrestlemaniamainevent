/**
 * Wrestlemania Main Event JavaScript/AngularJS file
 *
 * @author Craig R Morton <crmpicco@aol.co.uk>
 * @date 06-Aug-2014
 */

// AngularJS
var app = angular.module('MainEventApp', []);
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
            name: 'Hulk Hogan vs Sgt. Slaughter'
        },
        {
            id: 8,
            roman_numeral: 'VIII',
            name: 'Hulk Hogan vs Sid Justice'
        },
        {
            id: 9,
            roman_numeral: 'IX',
            name: 'Yokozuna vs Bret Hart'
        },
        {
            id: 10,
            roman_numeral: 'X',
            name: 'Yokozuna vs Bret Hart'
        },
        {
            id: 11,
            roman_numeral: 'XI',
            name: 'Lawrence Taylor vs Bam Bam Bigelow'
        },
        {
            id: 12,
            roman_numeral: 'XII',
            name: 'Bret Hart vs Shawn Michaels'
        },
        {
            id: 13,
            roman_numeral: 'XIII',
            name: 'Sid Justice vs Undertaker'
        },
        {
            id: 14,
            roman_numeral: 'XIV',
            name: 'Shawn Michaels vs Stone Cold Steve Austin'
        },
        {
            id: 15,
            roman_numeral: 'XV',
            name: 'Stone Cold Steve Austin vs The Rock'
        },
        {
            id: 16,
            roman_numeral: 'XVI',
            name: 'Triple H vs The Rock vs Big Show vs Mick Foley'
        },
        {
            id: 17,
            roman_numeral: 'XVII',
            name: 'The Rock vs Stone Cold Steve Austin'
        },
        {
            id: 18,
            roman_numeral: 'XVIII',
            name: 'Chris Jericho vs Triple H'
        },
        {
            id: 19,
            roman_numeral: 'XIX',
            name: 'Kurt Angle vs Brock Lesnar'
        },
        {
            id: 20,
            roman_numeral: 'XX',
            name: 'Triple H vs Shawn Michaels vs Chris Benoit'
        },
        {
            id: 21,
            roman_numeral: 'XXI',
            name: 'Triple H vs Batista'
        },
        {
            id: 22,
            roman_numeral: 'XXII',
            name: 'John Cena vs Triple H'
        },
        {
            id: 23,
            roman_numeral: 'XXIII',
            name: 'John Cena vs Shawn Michaels'
        },
        {
            id: 24,
            roman_numeral: 'XXIV',
            name: 'Edge vs Undertaker'
        },
        {
            id: 25,
            roman_numeral: 'XXV',
            name: 'Triple H vs Randy Orton'
        },
        {
            id: 26,
            roman_numeral: 'XXVI',
            name: 'John Cena vs Batista'
        },
        {
            id: 27,
            roman_numeral: 'XXVII',
            name: 'John Cena vs The Miz'
        },
        {
            id: 28,
            roman_numeral: 'XXVIII',
            name: 'John Cena vs The Rock'
        },
        {
            id: 29,
            roman_numeral: 'XXIX',
            name: 'John Cena vs The Rock'
        },
        {
            id: 30,
            roman_numeral: 'XXX',
            name: 'Batista vs Randy Orton vs Daniel Bryan'
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
});