
const { Member } = require('../member');

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
  moderateRequests(member) {

    if (/* admin approval condition */) {
      member.status = 'approved';
    } else {
      member.status = 'rejected';
    }
  }
}

const admin = new Admin();
admin.moderateRequests(newMember);

console.log(newMember.status); // "approved" or "rejected"

module.exports = { Admin };