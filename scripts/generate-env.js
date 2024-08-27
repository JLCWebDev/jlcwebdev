const fs = require('fs');

const envConfigFile = `
export const environment = {
  production: true,
  apiUrl: '${process.env.API_URL}',
  // add more environment variables here
};
`;

fs.writeFileSync('./src/environments/environment.prod.ts', envConfigFile);
