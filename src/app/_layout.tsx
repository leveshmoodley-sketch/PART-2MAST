import { Stack } from 'expo-router';
import { MenuProvider } from '../context/MenuContext';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <MenuProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#2C3E50' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="index" options={{ title: '🍽️ Menu Manager' }} />
        <Stack.Screen name="add-item" options={{ title: 'Add New Dish' }} />
      </Stack>
      <StatusBar style="light" />
    </MenuProvider>
  );
}