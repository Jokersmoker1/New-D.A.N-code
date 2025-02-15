const mongoose = require('mongoose');
const Tip = require('../src/database/models/Tip');
const config = require('../src/config/config');

const tips = [
  { text: 'The Eiffel Tower grows 6 cm in summer due to thermal expansion.', category: 'Fun Fact' },
  { text: 'Japan has over 5 million vending machines.', category: 'Fun Fact' },
  { text: 'Always carry a reusable water bottle when traveling.', category: 'Travel Tip' },
];

async function populateDatabase() {
  await mongoose.connect(config.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  await Tip.insertMany(tips);
  console.log('Database populated with travel tips!');
  process.exit();
}

populateDatabase();
