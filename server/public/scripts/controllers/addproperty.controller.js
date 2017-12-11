app.controller('AddPropertyController', ['PropertyService', function(PropertyService){
    var self = this;
    self.newProperty = {};
    self.addListing = PropertyService.postListing;
    self.addRental = PropertyService.postRental;
}]);