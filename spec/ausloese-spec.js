var ausloese = require('../ausloese');

describe('When date is 2013 and earlier', function() {
    describe('calculate', function() {
        var amount;
        it('should give back 6 Euro when absence is 8 or less than 14 hours and date is 2013 and before',
            function() {
                amount = ausloese.calculate('2013-12-31', 8);
                expect(amount).toBe(6);
                amount = ausloese.calculate('2013-12-31', 13.99);
                expect(amount).toBe(6);
            });
        it('should give back 0 Euro when absence is lower than 8 hours', function() {
            amount = ausloese.calculate('2013-12-31', 7);
            expect(amount).toBe(0);
        });
        it('should give back 12 Euro when absence is 14 or less than 24 hours', function() {
            amount = ausloese.calculate('2013-12-31', 14);
            expect(amount).toBe(12);
            amount = ausloese.calculate('2013-12-31', 23.99);
            expect(amount).toBe(12);
        });
        it('should give back 24 Euro when absence is 24 hours', function() {
            amount = ausloese.calculate('2013-12-31', 24);
            expect(amount).toBe(24);
        });
        it('should throw an error when absence is more than 24 hours', function() {
            expect(function() {
                ausloese.calculate('2013-12-31', 25)
            }).toThrow(new Error('Number of hours must not be more than 24 per day'));
        });
    });
});

describe('When date is 2014 and later', function() {
    describe('calculate', function() {
        var amount;

        // TODO: We need to consider the next or previous day
        // jeweils 12 € für den An- und Abreisetag, wenn der Arbeitnehmer an diesem,
        // einem anschließenden oder vorhergehenden Tag außerhalb seiner Wohnung übernachtet,
        // eine Mindestabwesenheitszeit ist nicht erforderlich

        it('should give back 0 Euro when absence is lower than 8 hours', function() {
            amount = ausloese.calculate('2014-01-01', 7);
            expect(amount).toBe(0);
        });
        it('should give back 12 Euro when absence is 8 or less than 24 hours', function() {
            amount = ausloese.calculate('2014-01-01', 8);
            expect(amount).toBe(12);
            amount = ausloese.calculate('2014-01-01', 23.99);
            expect(amount).toBe(12);
        });
        it('should give back 24 Euro when absence is 24 hours', function() {
            amount = ausloese.calculate('2014-01-01', 24);
            expect(amount).toBe(24);
        });
        it('should throw an error when absence is more than 24 hours', function() {
            expect(function() {
                ausloese.calculate('2014-01-01', 25)
            }).toThrow(new Error('Number of hours must not be more than 24 per day'));
        });
    });
});

describe('When date is invalid', function() {
    describe('calculate', function() {
        it('should throw an error', function() {
            expect(function() {
                ausloese.calculate(null, 8)
            }).toThrow(new Error('Date must be valid'));
            expect(function() {
                ausloese.calculate('', 8)
            }).toThrow(new Error('Date must be valid'));
            expect(function() {
                ausloese.calculate('2013-12-32', 8)
            }).toThrow(new Error('Date must be valid'));
        });
    });
});
