var moment = require('moment');

exports.calculate = function(date, numberOfHours) {
    date = moment(date);
    if (date.year() === 2013) {
        switch (true) {
            case (numberOfHours < 8):
                return 0;
                break;

            case (numberOfHours < 14):
                return 6;
                break;

            case (numberOfHours < 24):
                return 12;
                break;

            case (numberOfHours === 24):
                return 24;
                break;

            case (numberOfHours > 24):
                throw 'Number of hours must not be more than 24 per day';
                break;

            default:
                return 0;
                break;
        }
    }
};
