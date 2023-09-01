const { Member } = require('../models/member');
const { Admin } = require('../models/admin');

describe('Admin Class', () => {
    it('should approve a member if "approved" is true', () => {
        const newMember = new Member(
            'Arzu',
            'Caner',
            'arzuguneycaner@gmail.com',
            'Developer',
            'London',
            'Female',
            'UK',
            'pending'
        );

        const admin = new Admin();
        admin.moderateRequests(newMember, true);

        expect(newMember.status).toBe('approved');
    });

    it('should reject a member if "approved" is false', () => {
        const newMember = new Member(
            'Arzu',
            'Caner',
            'arzuguneycaner@gmail.com',
            'Developer',
            'London',
            'Female',
            'UK',
            'pending'
        );

        const admin = new Admin();
        admin.moderateRequests(newMember, true);
        admin.moderateRequests(newMember, false);

        expect(newMember.status).toBe('rejected');
    });
});
