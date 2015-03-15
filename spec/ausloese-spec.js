var ausloese = require('../ausloese');

describe('2013 und davor', function() {
    describe('calculateAusloeseFor2013', function() {
        it('should give back 6 Euro when absence is between 8 an 14 hours', function() {
            var amount = ausloese.calculateAusloeseFor2013(8);
            expect(amount).toBe(6);
        });
    });
});

