import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'survey.app',
  appName: 'survey-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
