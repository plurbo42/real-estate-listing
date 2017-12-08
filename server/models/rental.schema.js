var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create new schema
// this will enforce our obect properties
var rentalSchema = new Schema({
    rent: {type: Number, required: true},
    sqft: {type: Number},
    city: {type: String}
});

module.exports = mongoose.model('Rental', rentalSchema);