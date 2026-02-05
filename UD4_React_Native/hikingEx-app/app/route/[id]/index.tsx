import { Ionicons } from "@expo/vector-icons";
import { useGlobalSearchParams } from "expo-router";
import { getRouteById } from "@/data/Api";
import { ScrollView, View, Image, Text } from "react-native";
import React from "react";

export default function RouteInfoScreen() {
    const id = useGlobalSearchParams();
    const [route, setRoute] = React.useState(getRouteById(Number(id)))
    
    /******IMPORTANTE*****/
    /*Para poder obtener el parámetro ID en index.tsx y city.tsx 
        debéis usar la función useGlobalSearchParams(), 
        la cual funciona igual que la useLocalParams() 
        pero permite obtener el id en todos los componentes.*/


    return (
        <ScrollView className="flex-1 bg-stone-50" showsVerticalScrollIndicator={false}>
            <Image
                source={{ uri: route?.image }}
                className="w-auto h-72"
            />
            <View className="p-3 flex flex-col gap-5">
                <View className="flex flex-row justify-between">
                    <Text className="font-bold text-3xl text-emerald-900">Caminito del Rey</Text>
                    <Text className={`p-1 rounded ${route?.difficulty === "Fácil" ? "bg-green-100  text-green-800" : route?.difficulty === "Moderada" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>{route?.difficulty}</Text>
                </View>

                <View className="flex flex-row justify-between border border-emerald-900 rounded-2xl p-4">
                    <View className="flex flex-col items-center gap-2">
                        <Ionicons name="resize-outline" size={16} color="#064e3b" />
                        <Text className="text-emerald-900 font-medium text-xs">Distance</Text>
                        <Text className="text-gray-300 font-medium text-sm">DISTANCIA</Text>
                    </View>
                    <View className="flex flex-col items-center gap-2">
                        <Ionicons name="time-outline" size={16} color="#064e3b" />
                        <Text className="text-emerald-900 font-medium text-xs">duracion</Text>
                        <Text className="text-gray-300 font-medium text-sm">DURACIÓN</Text>
                    </View>
                    <View className="flex flex-col items-center gap-2">
                        <Ionicons name="trending-up-outline" size={16} color="#064e3b" />
                        <Text className="text-emerald-900 font-medium text-xs">eñevacion</Text>
                        <Text className="text-gray-300 font-medium text-sm">DESNIVEL</Text>
                    </View>
                </View>

                <View>
                    <Text className="text-gray-300 font-medium text-sm">DESCRIPCIÓN</Text>
                    <Text className="text-gray-400">{route?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit aperiam architecto ex cupiditate nulla, nesciunt, quaerat ratione ducimus dolorem, similique dolorum dolore sequi quasi delectus in aspernatur. Debitis, velit? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nam dolores labore ut modi assumenda dicta quod rem blanditiis enim, necessitatibus aliquid consequuntur, qui quae animi aperiam aut nemo doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut provident a accusantium, et eum error? Error recusandae sunt eius commodi at quod ipsam ab ratione molestiae omnis. Fuga, ipsa quos.</Text>
                </View>
            </View>

            
        </ScrollView>
    );
}
