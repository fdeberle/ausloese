exports.calculateAusloeseFor2013 = function(numberOfHours) {
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

        default:
            return 0;
            break;
    }
};
