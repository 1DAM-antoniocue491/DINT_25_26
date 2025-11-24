import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

export default function Index() {

  const [count, setCount] = React.useState<number>(0);

  function handleButton() {
    setCount(count+1)
  }

  function resetCount() {
    setCount(0)
  }

  return (
    <SafeAreaView className="flex-1">
      <View
        className="relative flex-1 justify-center items-center"
      >
        <Text className="text-blue-800 text-9xl">
          {count}
        </Text>
        <Button label="Reset" onPress={resetCount} position="left"></Button>
        <Button label="+1" onPress={handleButton} onLongPress={resetCount}></Button>
      </View>
    </SafeAreaView>
  );
}
