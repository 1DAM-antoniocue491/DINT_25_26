import { Link } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-neutral-50 items-center justify-center">
      <View className="items-center p-8 w-full">
       <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/814/814513.png' }}
          className="w-40 h-40 mb-8"
        />
        <Text className="text-3xl text-neutral-800 font-bold mb-2">EduAtlas</Text>
        <Text className="text-center text-neutral-600 mb-6">
          Descubre la diversidad cultural de los países del mundo.
        </Text>
        <Link href="/countries" asChild>
          <Pressable className="bg-sky-400 px-6 py-3 rounded-full shadow-black shadow-lg">
            <Text className="text-white text-lg font-semibold">Explorar</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
