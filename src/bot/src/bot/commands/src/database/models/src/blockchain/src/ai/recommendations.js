const OpenAI = require('openai');
const config = require('../config/config');

const openai = new OpenAI({ apiKey: config.OPENAI_API_KEY });

async function getRecommendation(userPreferences) {
  const prompt = `Provide a personalized travel recommendation based on the following preferences: ${userPreferences}`;

  const response = await openai.completions.create({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 150,
  });

  return response.choices[0].text.trim();
}

module.exports = { getRecommendation };
