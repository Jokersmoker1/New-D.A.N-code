const schedule = require('node-schedule');
const { postTravelTip, startPoll, recognizeUser } = require('./commands');
const { connectToDatabase } = require('../database');
const { setupBlockchain } = require('../blockchain');
const config = require('../config/config');

// Initialize the bot
async function initBot() {
  console.log('Starting D.A.N. Travel Bot...');

  // Connect to database
  await connectToDatabase();

  // Set up blockchain integration
  await setupBlockchain();

  // Schedule daily travel tips
  schedule.scheduleJob('0 9 * * *', () => {
    postTravelTip();
  });

  // Schedule weekly polls
  schedule.scheduleJob('0 12 * * 1', () => {
    startPoll();
  });

  // Schedule user recognition
  schedule.scheduleJob('0 18 * * *', () => {
    recognizeUser();
  });

  console.log('D.A.N. is now running!');
}

initBot().catch(console.error);
