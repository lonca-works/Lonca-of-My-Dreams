
const { Member } = require('./member');

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

class Admin {
  moderateRequests(member, approved) {

    if (approved) {
      member.status = 'approved';
    } else {
      member.status = 'rejected';
    }
  }
}

const admin = new Admin();
admin.moderateRequests(newMember);

console.log(newMember.status);

module.exports = { Admin };