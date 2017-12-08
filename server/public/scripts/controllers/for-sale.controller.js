app.controller('ForSaleController', ['PropertyService', function(PropertyService){
    var self = this;
    self.forRent = PropertyService.forRentArray
}]);