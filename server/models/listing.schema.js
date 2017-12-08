var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create new schema
// this will enforce our obect properties
var listingSchema = new Schema({
    cost: {type: Number, required: true},
    sqft: {type: Number},
    city: {type: String}
});

module.exports = mongoose.model('Listing', listingSchema);