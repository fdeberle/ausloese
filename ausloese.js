exports.calculateAusloeseFor2013 = function(numberOfHours) {
    if (numberOfHours < 8) {
        return 0;
    } else {
        if (numberOfHours < 14) {
            return 6;
        }
        else {
            if (numberOfHours < 24) {
                return 12;
            } else {
                return 24;
            }
        }
    }
};
