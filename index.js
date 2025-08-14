const strapi = require('@strapi/strapi');

let instance;

async function createStrapi() {
  if (!instance) {
    instance = await strapi().load();
  }
  return instance;
}

module.exports = async (req, res) => {
  const strapi = await createStrapi();
  
  // Handle the request
  strapi.server.httpServer.emit('request', req, res);
};