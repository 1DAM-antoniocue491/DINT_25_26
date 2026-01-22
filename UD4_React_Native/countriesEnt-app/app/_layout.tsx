import { Stack } from 'expo-router';
import '../global.css';

export default function RootLayout() {
  return (
   <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#38bdf8',
    },
    headerTintColor:  '#ffffffff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    headerTitleAlign: 'center',
  }}>
    <Stack.Screen  name="index" options={{ headerShown: false, title: 'Home'}} />
    <Stack.Screen  name="countries/index" options={{title: 'Countries'}}/>
    <Stack.Screen  name="countries/[id]" />
  </Stack>
  );
}
