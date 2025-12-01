/**
 * FitZone Fitness App Configuration
 * 
 * A vibrant fitness and wellness app with energetic branding
 */

module.exports = {
  // App Identity
  appName: 'FitZone',
  slug: 'fitzone',
  scheme: 'fitzone',
  version: '1.0.0',

  // Assets
  icon: './assets/fitzone/icon.png',
  splash: {
    image: './assets/fitzone/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#10B981', // Vibrant green
  },

  // iOS Configuration
  ios: {
    bundleIdentifier: 'com.fitzone.app',
    icon: './assets/fitzone/icon.png',
  },

  // Android Configuration
  android: {
    package: 'com.fitzone.app',
    adaptiveIcon: {
      foregroundImage: './assets/fitzone/adaptive-icon.png',
      backgroundColor: '#10B981',
    },
  },

  // Web Configuration
  web: {
    favicon: './assets/fitzone/favicon.png',
  },

  // Brand Colors - Energetic fitness theme
  brandColors: {
    primary: '#10B981',    // Vibrant Green
    secondary: '#F59E0B',  // Energetic Orange
    accent: '#EF4444',     // Active Red
    background: '#FFFFFF', // Clean White
    text: '#1F2937',       // Dark Gray
    error: '#DC2626',      // Error Red
    success: '#059669',    // Success Green
  },

  // Feature Flags
  features: {
    auth: true,
    workoutTracking: true,
    socialSharing: true,
    nutritionPlans: true,
    personalTrainer: true,
    challenges: true,
    analytics: true,
    darkMode: false,
    notifications: true,
  },

  // API Configuration
  apiUrl: 'https://api.fitzone.app',
  supportEmail: 'support@fitzone.app',

  // Localization
  locale: 'en',
};
