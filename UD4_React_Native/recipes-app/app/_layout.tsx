import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return(
  <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#e6ffc1ff',
    },
    headerTintColor:  '#447100ff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
    },
  }}>
    <Stack.Screen name="index" options={{ title: 'Recetario' }} />
    <Stack.Screen  name="[id]" />
  </Stack>
  );
}
