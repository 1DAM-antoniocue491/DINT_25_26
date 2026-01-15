import { FlatList, Text, View } from "react-native";
import { getCategories } from "../data/api";
import React from "react";
import Categoria from "@/components/Categoria";

export default function Index() {
  const [ categories ] = React.useState(getCategories());

  return (
    <View className="bg-gray-800 flex-1 p-5">
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Categoria id={item.id} name={item.name} endpoint={item.endpoint} icon={item.icon} />
        )}
      />
    </View>
  );
}
