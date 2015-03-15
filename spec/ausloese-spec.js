var ausloese = require('../ausloese');

describe('2013 und davor', function() {
    describe('calculateAusloeseFor2013', function() {
        var amount;
        it('should give back 6 Euro when absence is more than 8 and less than 14 hours', function() {
            amount = ausloese.calculateAusloeseFor2013(8);
            expect(amount).toBe(6);
            amount = ausloese.calculateAusloeseFor2013(13.99);
            expect(amount).toBe(6);
        });
        it('should give back 0 Euro when absence is lower than 8 hours', function() {
            amount = ausloese.calculateAusloeseFor2013(7);
            expect(amount).toBe(0);
        });
        it('should give back 12 Euro when absence is between 14 and 24 hours', function() {
            amount = ausloese.calculateAusloeseFor2013(14);
            expect(amount).toBe(12);
            amount = ausloese.calculateAusloeseFor2013(24);
            expect(amount).toBe(12);
        });
    });
});

