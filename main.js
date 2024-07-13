require('dotenv').config();

var client_id = process.env.CLIENT_ID;
var client_secret = process.env.CLIENT_SECRET;

console.log('Client ID: ${client_id}');
console.log('Client Secret: ${client_secret}')