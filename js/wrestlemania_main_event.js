/**
 * Wrestlemania Main Event JavaScript/AngularJS file
 *
 * @author Craig R Morton <crmpicco@aol.co.uk>
 * @date 06-Aug-2014
 */

var app = angular.module('MainEventApp',[]);
app.controller("MainEventCtrl", function($scope){
    // @TODO pull these from a database table or a flat file
    $scope.main_events = [
        {
            id: 1,
            name: 'Hulk Hogan & Mr T vs Rowdy Roddy Piper & Paul Orndorff'
        },
        {
            id: 2,
            name: 'Hulk Hogan vs King Kong Bundy'
        },
        {
            id: 3,
            name: 'Hulk Hogan vs Andre The Giant'
        },
        {
            id: 4,
            name: 'Macho Man Randy Savage vs Million Dollar Man Ted DiBiase'
        },
        {
            id: 5,
            name: 'Macho Man Randy Savage vs Hulk Hogan'
        },
        {
            id: 6,
            name: 'Hulk Hogan vs Ultimate Warrior'
        },
        {
            id: 7,
            name: 'Hulk Hogan vs Sgt. Slaughter'
        },
        {
            id: 8,
            name: 'Hulk Hogan vs Sid Justice'
        },
        {
            id: 9,
            name: 'Yokozuna vs Bret Hart'
        },
        {
            id: 10,
            name: 'Yokozuna vs Bret Hart'
        }
    ];
});