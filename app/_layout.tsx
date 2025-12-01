import { Stack } from 'expo-router';
import Constants from 'expo-constants';

export default function RootLayout() {
  const clientConfig = Constants.expoConfig?.extra;

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
