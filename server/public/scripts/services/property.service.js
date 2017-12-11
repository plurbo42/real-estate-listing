app.service('PropertyService', ['$http', function($http){
    var self = this;
    self.forRentArray = { list: [] };

    self.getRental = function () {
        $http({
            method: 'GET',
            url: '/property/for-rent',
        }).then(function (response) {
            console.log('response', response);
            self.forRentArray.list = response.data;

        });
    };

    self.forSaleArray = { list: [] };

    self.getListing = function () {
        $http({
            method: 'GET',
            url: '/property/for-sale', 
        }).then(function (response) {
            console.log('response', response);
            self.forSaleArray.list = response.data;

        });
    };

    self.postListing = function (newPropertyObject) {
        console.log('clicked Add Listing', newPropertyObject);
        $http({
            method: 'POST',
            url: '/property/for-sale',
            data: newPropertyObject,
        }) .then(function (response){
            console.log('response', response);
            self.getListing();
        });
    };

    self.postRental = function (newRentalObject) {
        console.log('clicked Add Rental', newRentalObject);
        $http({
            method: 'POST',
            url: '/property/for-rent',
            data: newRentalObject,
        }) .then(function (response){
            console.log('response', response);
            self.getRental();
        });
    };
    
}]);