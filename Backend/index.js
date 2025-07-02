const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const Donation = require('./models/Donation');
const FundingTracking = require('./models/FundingTracking');
const Campaign = require('./models/Campaign');
const Feedback = require('./models/Feedback');
const cors = require('cors');

const app = express();
app.use(express.json());

// Enable CORS with specific origin
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Connect with just one line
mongoose.connect('mongodb://127.0.0.1:27017/mern_auth')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.log('Connection failed:', err));


// Registration endpoint (exact format you requested)
app.post("/register", (req, res) => {  
  const { name, email, password, role } = req.body;

  User.create({ name, email, password, role })
    .then(_user => res.send('Registration successful'))  // Added success response
    .catch(err => {
      console.error(err);
      res.status(400).send('Registration failed');  // Added error response
    });
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  // Simple check
  const user = await User.findOne({ email, password });
  
  if (user) {
    res.send('Login successful!');
  } else {
    res.send('Wrong email or password');
  }
});

// Donation
app.post('/donate', (req, res) => {
  const { donorName, amount, paymentMethod, cause } = req.body;
  
  Donation.create({ donorName, amount, paymentMethod, cause })
    .then(() => res.send('Donation successful'))  // Success response
    .catch(err => {
      console.error('Donation error:', err);
      res.status(400).send('Donation failed');  // Error response
    });
});




// Simple Campaign Creation Endpoint (updated version)
app.post("/create-campaign", (req, res) => {
  const { title, description, goal } = req.body;
  
  Campaign.create({ 
    title, 
    description, 
    goalAmount: goal
  })
  .then(() => res.send('Campaign created successfully'))
  .catch(() => res.send('Failed to create campaign'));
});

app.post('/feedback', (req, res) => {
  const { name, rating, comment } = req.body;
  
  // Map frontend field names to database schema
  Feedback.create({
    donorName: name,      // Matches schema
    rating: Number(rating), // Ensure number
    comments: comment     // Matches schema
  })
  .then(() => res.send('Feedback submitted'))
  .catch(err => {
    console.error('Feedback error:', err);
    res.status(400).send('Feedback failed');
  });
});


app.post('/track-funds', (req, res) => {
  const { campaign, raised, goal } = req.body;
  
  // Convert string inputs to numbers
  const totalRaised = Number(raised);
  const goalAmount = Number(goal);
  
  FundingTracking.create({
    campaignId: campaign,
    totalRaised: totalRaised,
    goalAmount: goalAmount,
    progress: Math.min(Math.round((totalRaised / goalAmount) * 100), 100)
  })
  .then(() => res.send('Fund tracking saved successfully'))
  .catch(err => {
    console.error('Save error:', err);
    res.status(400).send('Failed to save fund tracking');
  });
});



app.listen(3000, () => console.log('Server running on port 3000'));