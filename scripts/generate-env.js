const fs = require('fs');
const path = './src/environments';

// Ensures the environments directory exists
if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
}

const envConfigFile = `
export const environment = {
  production: true,
  apiUrl: '${process.env.API_URL}',
  // Add other environment variables here
};
`;

fs.writeFileSync(`${path}/environment.prod.ts`, envConfigFile);
