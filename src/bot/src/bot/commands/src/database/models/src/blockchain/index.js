const { Actor, HttpAgent } = require('@dfinity/agent');
const config = require('../config/config');

async function setupBlockchain() {
  const agent = new HttpAgent({ host: config.ICP_HOST });
  const canister = Actor.createActor(config.ICP_CANISTER_ID, { agent });

  console.log('Connected to ICP blockchain');
  return canister;
}

module.exports = { setupBlockchain };
