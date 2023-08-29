const express = require('express');
const { Member } = require('./models/member');
const { Admin } = require('./models/admin');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

app.use(express.json());

app.post('/apply', async (req, res) => {
  
  const { firstName, lastName, email, job, city, gender, country } = req.body;

  const newMember = new Member(
    firstName,
    lastName,
    email,
    job,
    city,
    gender,
    country,
    'pending'
  );

    const admin = new Admin();

    admin.moderateRequests(newMember);

    const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(dbName);
    const membersCollection = db.collection('members');
    await membersCollection.insertOne(newMember);
  } finally {
    client.close();
  }

  res.json({ status: newMember.status });
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});