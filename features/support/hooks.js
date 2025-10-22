const { BeforeAll } = require('@cucumber/cucumber');
const dotenv = require('dotenv');
const path = require('path');

BeforeAll(function () {
  const ENV = process.env.ENV; // pick the env, default to 'qa'
  dotenv.config({ path: path.resolve(process.cwd(), `.env.${ENV}`) });
  console.log('✅ Environment Loaded:', ENV);
  console.log('✅ BASE_URL:', process.env.BASE_URL);
});
