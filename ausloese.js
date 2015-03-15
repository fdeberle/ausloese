exports.calculateAusloeseFor2013 = function (numberOfHours) {
    if (numberOfHours < 8) {
        return 0;
    } else {
        return 6;
    }
};
