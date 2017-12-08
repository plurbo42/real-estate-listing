app.controller('ForSaleController', ['PropertyService', function(PropertyService){
    var self = this;
    self.forSale = PropertyService.forSaleArray
    PropertyService.getListing();
}]);