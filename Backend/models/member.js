class Member {
    constructor(firstName, lastName, email, job, city, gender, country, status) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.job = job;
        this.city = city;
        this.gender = gender;
        this.country = country;
        this.status = status;
    }
}

module.exports = { Member };
