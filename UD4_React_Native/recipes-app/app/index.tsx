import { Text, View, FlatList } from "react-native";
import { getData } from "@/data/Api";

export default function Index() {
  const data = getData();
  return (
    <View className="flex-1 gap-4 bg-[#f9ffefff]">
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View>
                <Text>{item.titulo}</Text>
              </View>
            )}
        />
    </View>
  );
}
