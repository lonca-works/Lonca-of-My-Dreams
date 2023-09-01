const { Member } = require('../models/member');

describe('Member Class', () => {
    it('should create a member object with correct properties', () => {
        const member = new Member(
            'Arzu',
            'Caner',
            'arzuguneycaner@gmail.com',
            'Developer',
            'London',
            'Female',
            'UK',
            'pending'
        );

        expect(member.firstName).toBe('Arzu');
        expect(member.lastName).toBe('Caner');
        expect(member.email).toBe('arzuguneycaner@gmail.com');
        expect(member.job).toBe('Developer');
        expect(member.city).toBe('London');
        expect(member.gender).toBe('Female');
        expect(member.country).toBe('UK');
        expect(member.status).toBe('pending');
    });
});
