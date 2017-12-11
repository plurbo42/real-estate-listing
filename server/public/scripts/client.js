var app = angular.module('RealEstateApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeController as vm'
    }).when('/for-rent', {
        templateUrl: '/views/for-rent.html',
        controller: 'ForRentController as vm'
    }).when('/for-sale', {
        templateUrl: '/views/for-sale.html',
        controller: 'ForSaleController as vm'
    }).when('/addproperty', {
        templateUrl: '/views/addproperty.html',
        controller: 'AddPropertyController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
