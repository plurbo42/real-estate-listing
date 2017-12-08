var express = require('express');
var router = express.Router();
var Rental = require('../models/rental.schema');
var Listing = require('../models/listing.schema');


router.get('/for-rent', function(req, res){
    // a get request for all games
    Rental.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with rental find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});

router.get('/for-sale', function(req, res){
    // a get request for all games
    Listing.find({}, function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with listing find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
        }
    });
});

// router.post('/', function(req, res){
//     // a get request for all games
//     var addMovie = new Movie(req.body);
//     addMovie.save(function(errorMakingDatabaseQuery, data){
//         if (errorMakingDatabaseQuery) {
//             console.log('error with game find', errorMakingDatabaseQuery);
//             res.sendStatus(500);
//         } else {
//             res.sendStatus(200);
//         }
//     });
// });

module.exports = router;