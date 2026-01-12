import CardFood from "@/components/CardFood";
import { getData } from "@/data/Api";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";

export default function Index() {
  const [data] = React.useState(getData());  
  const PADDING = 16;
  

  
  return (
    <View className="flex-1 gap-4 bg-[#f9ffefff]">
        <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View className="flex-1">
                <CardFood
                  id={item.id}
                  title={item.titulo}
                  imagen={item.imagen}
                  href={item.id.toString()}
                />
              </View>
            )}
            columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: PADDING, gap: PADDING, paddingBottom: PADDING }}
        />
    </View>
  );
}
