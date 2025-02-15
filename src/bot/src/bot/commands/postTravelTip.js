const axios = require('axios');
const Tip = require('../../database/models/Tip');
const config = require('../../config/config');

async function postTravelTip() {
  try {
    // Fetch a random travel tip from the database
    const tip = await Tip.aggregate([{ $sample: { size: 1 } }]);

    // Post the tip to DSCVR
    await axios.post(`${config.DSCVR_API_URL}/posts`, {
      content: `🌍 **Travel Tip:** ${tip[0].text}\n\n#OutAndAbout #TravelTips`,
    });

    console.log('Posted travel tip:', tip[0].text);
  } catch (error) {
    console.error('Error posting travel tip:', error);
  }
}

module.exports = postTravelTip;
