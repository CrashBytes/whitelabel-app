import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Constants from 'expo-constants';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const clientConfig = Constants.expoConfig?.extra;

  useEffect(() => {
    // Hide splash screen after app is ready
    const hideSplash = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Minimum splash time
      await SplashScreen.hideAsync();
    };
    
    hideSplash();
  }, []);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: clientConfig?.brandColors?.primary || '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: clientConfig?.appName || 'Home'
        }} 
      />
    </Stack>
  );
}
