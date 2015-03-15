exports.calculateAusloeseFor2013 = function(numberOfHours) {
    if (numberOfHours < 8) {
        return 0;
    } else {
        if (numberOfHours < 14) {
            return 6;
        }
        else {
            return 12;
        }
    }
};
