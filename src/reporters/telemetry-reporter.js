// This module will be responsible for sending telemetry data to the control plane.
const https = require('https');
const config = require('../utils/config');

const sendTelemetry = async (data) => {
  const options = {
    hostname: new URL(config.controlPlaneUrl).hostname,
    path: new URL(config.controlPlaneUrl).pathname,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.authentication.secret}`, // Example with Bearer token
    },
  };

  const postData = JSON.stringify(data);

  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      return await new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
          let responseBody = '';
          res.on('data', (chunk) => {
            responseBody += chunk;
          });
          res.on('end', () => {
            if (res.statusCode >= 200 && res.statusCode < 300) {
              resolve({ statusCode: res.statusCode, body: responseBody });
            } else {
              reject(new Error(`Request failed with status code ${res.statusCode}`));
            }
          });
        });

        req.on('error', (error) => {
          reject(error);
        });

        req.write(postData);
        req.end();
      });
    } catch (error) {
      if (attempt < 4) {
        const delay = Math.pow(2, attempt) * 100;
        console.log(`Attempt ${attempt + 1} failed. Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        console.error('All retry attempts failed.');
        throw error;
      }
    }
  }
};

module.exports = {
  sendTelemetry,
}; 