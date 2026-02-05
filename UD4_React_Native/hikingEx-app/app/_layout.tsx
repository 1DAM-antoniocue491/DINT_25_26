import { Stack } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  return (
    <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#064e3b',
    },
    headerTintColor:  '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
    },
  }}>
    <Stack.Screen name="index" options={{ title: 'Explorar Rutas' }} />
    <Stack.Screen  name="route/[id]" />
  </Stack>
  );
}
