function connect() {
    var mongoose = require('mongoose');
    
    // mongoose connection
    var databaseUrl = 'mongodb://localhost:27017/realestate';
    mongoose.connect(databaseUrl);
    
    mongoose.connection.on('connected', function() {
        console.log('mongoose connected to: ', databaseUrl);
    });
    
    mongoose.connection.on('error', function() {
        console.log('mongoose connection error: ', error);
    });
}

module.exports = {
    connect: connect
};