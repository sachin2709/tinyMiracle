const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // Choose a port number of your choice

app.use(cors());
// Middleware

const mongoose = require('mongoose');

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/Errorless', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Error connecting to the database:', err));

// Define the schemas and models for the collections
const communitySchema = new mongoose.Schema({
  community_id: Number,
  name: String,
  location: String,
  description: String,
  coordinator: String,
  session_ids: [Number]
});

const sessionSchema = new mongoose.Schema({
    session_id: Number,
    name: String,
    voluntary: String,
    people_ids: [Number],
    community_ids: [Number]
  });
  
const peopleSchema = new mongoose.Schema({
    people_id: Number,
    community_id: Number,
    name: String,
    session_ids: [Number],
    improvement: {
      type: String,
      enum: ['Yes', 'No', 'Partially']
    }
  });

const Community = mongoose.model('Community', communitySchema);
const Session = mongoose.model('Session', sessionSchema);
const People = mongoose.model('People', peopleSchema);


// Insert sample data into the collections
async function insertSampleData1() {
    try {
      // Insert sample data for Community
      await Community.insertMany([
        {
          community_id: 1,
          name: 'Community 1',
          location: 'Location 1',
          description: 'Description 1',
          coordinator: 'Coordinator 1',
          session_ids: [1, 2, 3]
        },
        {
          community_id: 2,
          name: 'Community 2',
          location: 'Location 2',
          description: 'Description 2',
          coordinator: 'Coordinator 2',
          session_ids: [1, 3, 4]
        },
        {
          community_id: 3,
          name: 'Community 3',
          location: 'Location 3',
          description: 'Description 3',
          coordinator: 'Coordinator 3',
          session_ids: [2, 4, 5]
        },
        {
          community_id: 4,
          name: 'Community 4',
          location: 'Location 4',
          description: 'Description 4',
          coordinator: 'Coordinator 4',
          session_ids: [3, 5]
        },
        {
          community_id: 5,
          name: 'Community 5',
          location: 'Location 5',
          description: 'Description 5',
          coordinator: 'Coordinator 5',
          session_ids: [1, 2, 3, 4, 5]
        },
        {
            community_id: 6,
            name: 'Community 6',
            location: 'Location 6',
            description: 'Description 6',
            coordinator: 'Coordinator 6',
            session_ids: [4, 5]
          },
          {
            community_id: 7,
            name: 'Community 7',
            location: 'Location 7',
            description: 'Description 7',
            coordinator: 'Coordinator 7',
            session_ids: [3, 4]
          },
          {
            community_id: 8,
            name: 'Community 8',
            location: 'Location 8',
            description: 'Description 8',
            coordinator: 'Coordinator 8',
            session_ids: [2, 5]
          },
          {
            community_id: 9,
            name: 'Community 9',
            location: 'Location 9',
            description: 'Description 9',
            coordinator: 'Coordinator 9',
            session_ids: [1, 3, 4]
          },
          {
            community_id: 10,
            name: 'Community 10',
            location: 'Location 10',
            description: 'Description 10',
            coordinator: 'Coordinator 10',
            session_ids: [2, 4, 5]
          }
      ]);
  
      // Insert sample data for Session
      await Session.insertMany([
        {
          session_id: 1,
          name: 'Session 1',
          voluntary: 'Voluntary 1',
          people_ids: [1, 2, 3],
          community_ids: [1, 2]
        },
        {
          session_id: 2,
          name: 'Session 2',
          voluntary: 'Voluntary 2',
          people_ids: [1, 3, 4],
          community_ids: [3, 5]
        },
        {
          session_id: 3,
          name: 'Session 3',
          voluntary: 'Voluntary 3',
          people_ids: [2, 4, 5],
          community_ids: [1, 4, 5]
        },
        {
          session_id: 4,
          name: 'Session 4',
          voluntary: 'Voluntary 4',
          people_ids: [2, 4],
          community_ids: [2, 3, 5]
        },
        {
          session_id: 5,
          name: 'Session 5',
          voluntary: 'Voluntary 5',
          people_ids: [3, 5],
          community_ids: [3, 5]
        },
        {
            session_id: 6,
            name: 'Session 6',
            voluntary: 'Voluntary 6',
            people_ids: [4, 5],
            community_ids: [6, 7]
          },
          {
            session_id: 7,
            name: 'Session 7',
            voluntary: 'Voluntary 7',
            people_ids: [1, 2, 3],
            community_ids: [7, 8]
          },
          {
            session_id: 8,
            name: 'Session 8',
            voluntary: 'Voluntary 8',
            people_ids: [2, 3, 4],
            community_ids: [9, 10]
          },
          {
            session_id: 9,
            name: 'Session 9',
            voluntary: 'Voluntary 9',
            people_ids: [1,4],
            community_ids: [8,9]
            },
            {
              session_id: 10,
              name: 'Session 10',
              voluntary: 'Voluntary 10',
              people_ids: [3, 4, 5],
              community_ids: [6, 9]
            }
    ]);
  
     // Insert sample data for People
     await People.insertMany([
        {
          people_id: 1,
          community_id: 1,
          name: 'Person 1',
          session_ids: [1, 2],
          improvement: 'Yes'
        },
        {
          people_id: 2,
          community_id: 2,
          name: 'Person 2',
          session_ids: [1, 3],
          improvement: 'No'
        },
        {
          people_id: 3,
          community_id: 3,
          name: 'Person 3',
          session_ids: [1, 3],
          improvement: 'Yes'
        },
        {
          people_id: 4,
          community_id: 4,
          name: 'Person 4',
          session_ids: [2, 4],
          improvement: 'Yes'
        },
        {
          people_id: 5,
          community_id: 5,
          name: 'Person 5',
          session_ids: [3, 5],
          improvement: 'Yes'
        },
        {
            people_id: 6,
            community_id: 6,
            name: 'Person 6',
            session_ids: [6, 8],
            improvement: 'Partially'
          },
          {
            people_id: 7,
            community_id: 7,
            name: 'Person 7',
            session_ids: [7, 9],
            improvement: 'Yes'
          },
          {
            people_id: 8,
            community_id: 8,
            name: 'Person 8',
            session_ids: [6, 10],
            improvement: 'No'
          },
          {
            people_id: 9,
            community_id: 9,
            name: 'Person 9',
            session_ids: [7, 8],
            improvement: 'Yes'
          },
          {
            people_id: 10,
            community_id: 10,
            name: 'Person 10',
            session_ids: [9, 10],
            improvement: 'Yes'
          }    
      ]);
  
      console.log('Additional sample data inserted successfully');

      // Fetch and log the data
      const communityData = await Community.find({});
      console.log('Community Data:', communityData);
      console.log('Number of community documents:', communityData.length);
  
      const sessionData = await Session.find({});
      console.log('Session Data:', sessionData);
      console.log('Number of session documents:', sessionData.length);
  
      const peopleData = await People.find({});
      console.log('People Data:', peopleData);
      console.log('Number of people documents:', peopleData.length);
    } catch (err) {
      console.error('Error inserting or fetching data:', err);
    }
}

//insertSampleData1();
async function addPeopleToCommunity2() {
    try {
      // Add people to Community 1
      await People.insertMany([
        {
          people_id: 11,
          community_id: 1,
          name: 'Person 11',
          session_ids: [1, 2],
          improvement: 'Yes'
        },
        {
          people_id: 12,
          community_id: 1,
          name: 'Person 12',
          session_ids: [3, 4],
          improvement: 'No'
        }
      ]);
  
      // Add people to Community 2
      await People.insertMany([
        {
          people_id: 13,
          community_id: 2,
          name: 'Person 13',
          session_ids: [1, 3],
          improvement: 'Partially'
        },
        {
          people_id: 14,
          community_id: 2,
          name: 'Person 14',
          session_ids: [2, 4],
          improvement: 'Yes'
        }
      ]);
  
      // Add people to Community 3
      await People.insertMany([
        {
          people_id: 15,
          community_id: 3,
          name: 'Person 15',
          session_ids: [1, 4],
          improvement: 'No'
        },
        {
          people_id: 16,
          community_id: 3,
          name: 'Person 16',
          session_ids: [2, 3],
          improvement: 'Partially'
        }
      ]);
  
      // Add people to Community 4
      await People.insertMany([
        {
          people_id: 17,
          community_id: 4,
          name: 'Person 17',
          session_ids: [2, 4],
          improvement: 'Yes'
        },
        {
          people_id: 18,
          community_id: 4,
          name: 'Person 18',
          session_ids: [3, 5],
          improvement: 'No'
        }
      ]);
  
      console.log('People added to the communities successfully');
  
      // Print the updated data
      const communityId = 1; // Specify the community ID for which you want to count the people
  
      const count = await People.countDocuments({ community_id: communityId });
      console.log(`Number of people in Community ${communityId}: ${count}`);
  
      const people = await People.find({ community_id: communityId });
      console.log(`People in Community ${communityId}:`);
      people.forEach((person) => {
        console.log(`- ${person.name}`);
      });
    } catch (err) {
      console.error('Error:', err);
    }
} 
//addPeopleToCommunity2();
 

app.get('/attendees_session/:communityId', async (req, res) => {
const { communityId } = req.params;
//To retrieve all sessions attended by a particular community
// Specify the community ID you want to retrieve sessions for
Session.find({ community_ids: communityId })
  .then((sessions) => {
    console.log('Sessions attended by Community', communityId);
    console.log(sessions);
    res.json(sessions);
  })
  .catch((err) => {
    console.error('Error retrieving sessions:', err);
    res.status(500).json({ error: 'Internal server error' });
  });
});


app.get('/attendees_people/:sessionId', async (req, res) => {
    const { sessionId } = req.params;
    //To retrieve all people who attended a particular session
    People.find({ session_ids: sessionId })
      .then((people) => {
        console.log('People attended Session', sessionId);
        console.log(people);
        res.json(people);
      })
      .catch((err) => {
        console.error('Error retrieving people:', err);
        res.status(500).json({ error: 'Internal server error' });
      });
  });
     
app.get('/session_allcommunity/:sessionId', async (req, res) => {
    const { sessionId } = req.params;
    //To retrieve all communities that attended a particular session,
    // Specify the session ID you want to retrieve communities for
    Community.find({ session_ids: sessionId })
    .then((communities) => {
      console.log('Communities attended Session', sessionId);
      console.log(communities);
      res.json(communities);
    })
    .catch((err) => {
      console.error('Error retrieving communities:', err);
      res.status(500).json({ error: 'Internal server error' });
    }); 
});

app.get('/attendees_community_people/:communityId', async (req, res) => {
    const { communityId } = req.params;
    // Specify the community ID for which you want to count the people
    try {
        const count = await People.countDocuments({ community_id: communityId });
        console.log(`Number of people in Community ${communityId}: ${count}`);

        const people = await People.find({ community_id: communityId });
        console.log(`People in Community ${communityId}:`);
        people.forEach((person) => {
        console.log(`- ${person.name}`);
        });
        res.json(people);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});



async function getSessionAttendByPerson(){
    const personId = 1; // Specify the person's ID for which you want to retrieve the sessions attended
    try {
    const sessions = await Session.find({ people_ids: personId }).exec();
    console.log(`Sessions attended by Person ${personId}:`);
    sessions.forEach((session) => {
        console.log(`- Session ID: ${session.session_id}, Name: ${session.name}`);
    });
    } catch (err) {
    console.error('Error:', err);
    }
}
//getSessionAttendByPerson();

app.get('/communities', async (req, res) => {
    try {
      const communities = await Community.find({});
      res.json(communities);
    } catch (err) {
      console.error('Error retrieving communities:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  
  app.get('/attendees_session_people/:sessionId', async (req, res) => {
    const { sessionId } = req.params;
    try {
      const people = await People.find({ session_ids: parseInt(sessionId) });
      console.log(`People attended Session ${sessionId}`);
      console.log(people);
      res.json(people);
    } catch (error) {
      console.error('Error retrieving people:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
 // Endpoint to fetch all sessions
app.get('/sessions', async (req, res) => {
    try {
      const sessions = await Session.find();
      res.json(sessions);
    } catch (error) {
      console.error('Error retrieving sessions:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }); 

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  