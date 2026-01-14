import CardFood from "@/components/CardFood";
import { getData, getRecipes } from "@/data/Api";
import { IRecipe } from "@/types/Interfaces";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";

export default function Index() {
  // const [data] = React.useState(getData());  
  const [ data, setData ] = React.useState<IRecipe[]>([]);

  const PADDING = 16;
  
  React.useEffect(() => {
    const loadData = async () => {
      try {
        const recipes = await getRecipes();
        setData(recipes);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        console.log("Data loading attempt finished.");
      }
    };

    loadData();
  }, []);
  
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
                  title={item.title}
                  imagen={item.photoUrl}
                  href={`/${item.id}`}
                />
              </View>
            )}
            columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: PADDING, gap: PADDING, paddingBottom: PADDING }}
        />
    </View>
  );
}
