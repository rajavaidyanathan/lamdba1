var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date(); 
    currentTime.setTimezone("Europe/London");
    callback(null, {
        statusCode: '200',
        body: 'The time in Bangalore is: ' + currentTime.toString(),
    });
};
