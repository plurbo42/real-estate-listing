app.controller('ForRentController', ['PropertyService', function(PropertyService){
    var self = this;
    self.forRent = PropertyService.forRentArray
}]);