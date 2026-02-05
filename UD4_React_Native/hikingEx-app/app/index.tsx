import { Ionicons } from "@expo/vector-icons";
import { FlatList, View, TextInput, ActivityIndicator, Text } from "react-native";
import { getRoutes } from '../data/Api'
import React from "react";
import RouteCard from "@/components/RouteCard";
import { Route } from '../types/interfaces'

export default function RoutesScreen() {
  const [routes, setRoutes] = React.useState(getRoutes());
  const [loading, setLoading] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>("");
  const [filteredRoutes, setFilterRoutes] = React.useState<Route[]>([]);

  const filter = (text: string) => {
      setSearch(text)
  }

    React.useEffect(() => {
        if (search.length > 0) {
            const findRoutes = routes.filter((route) =>
                route.title.toLowerCase().includes(search.toLowerCase())
            );
            setFilterRoutes(findRoutes);
        } else {
            setFilterRoutes(routes);
        }
    }, [search])

  if (loading) {
        return (
            <View className="flex-1 justify-center items-center bg-gray-50">
                <ActivityIndicator size="small" color="#3b82f6" />
                <Text className="mt-3 text-gray-500 font-medium">Loading routes...</Text>
            </View>
        );
    }

  return (
    <View className="flex-1 bg-stone-50 p-5">
      <View className="bg-stone-100 px-4 py-3 flex flex-row items-center mb-5">
        <Ionicons name="search-outline" size={18} color="#064e3b" />
        <TextInput
            placeholder="Search route by name..."
            className="h-10 px-4 bg-gray-100 rounded-xld text-gray-800"
            value={search}
            onChangeText={text => filter(text)}
        />
      </View>

      <FlatList
            data={filteredRoutes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <RouteCard id={item.id} title={item.title} description={item.description} difficulty={item.difficulty} distance={item.distance} duration={item.duration} image={item.image} elevationGain={item.elevationGain} cityId={item.cityId}></RouteCard>
            )}
        />

    </View>
  );
}