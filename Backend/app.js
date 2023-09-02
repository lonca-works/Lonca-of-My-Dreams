const express = require('express');
const { Member } = require('./models/member');
const { Admin } = require('./models/admin');
const MongoClient = require('mongodb').MongoClient;
const { connectToDatabase, getDbClient } = require('./mongodb-connection');

const app = express();
const port = 3000;
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

app.use(express.json());

app.post('/apply', async (req, res) => {
  try {

    const { firstName, lastName, email, job, city, gender, country } = req.body;

    const newMember = new Member({
      firstName,
      lastName,
      email,
      job,
      city,
      gender,
      country,
      status: 'pending'
    });

    const admin = new Admin();

    admin.moderateRequests(newMember);

    const client = new MongoClient(url);

    await client.connect();
    const db = client.db(dbName);
    const membersCollection = db.collection('members');
    await membersCollection.insertOne(newMember);

    client.close();
    res.json({ status: newMember.status });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});