import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.ef7b130b82ff458ea61eb198c4f64bf1',
  appName: 'Healthyaholic',
  webDir: 'dist',
  server: {
    url: 'https://ef7b130b-82ff-458e-a61e-b198c4f64bf1.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#22c55e",
      showSpinner: false
    }
  }
};

export default config;