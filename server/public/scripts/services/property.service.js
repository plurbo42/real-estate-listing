app.service('PropertyService', ['$http', function($http){
    var self = this;
    self.forRentArray = { list: [] };

    self.getRental = function () {
        $http({
            method: 'GET',
            url: '/property/for-rent'  //named this movie, can change
        }).then(function (response) {
            console.log('response', response);
            self.forRentArray.list = response.data;

        });
    };

    self.forSaleArray = { list: [] };

    self.getListing = function () {
        $http({
            method: 'GET',
            url: '/property/for-sale'  //named this movie, can change
        }).then(function (response) {
            console.log('response', response);
            self.forSaleArray.list = response.data;

        });
    };
    
}]);