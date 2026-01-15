import { Stack } from "expo-router";
import '../global.css';

export default function RootLayout() {
  return (
    <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#1F2937',
    },
    headerTintColor:  'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 50,
    },
    headerTitleAlign: 'center',
  }}>
    <Stack.Screen name="index" options={{ title: 'MovieScope' }} />
    <Stack.Screen  name="[id]" />
  </Stack>
  );
}
