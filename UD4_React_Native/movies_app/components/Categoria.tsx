import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, RelativePathString } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

interface CategoryProps {
  id: number;
  name: string;
  endpoint: string;
  icon: string;
};

export default function Categoria( props : CategoryProps ) {
    console.log(props.endpoint)
    return (
      
            <View className="flex-row items-center bg-gray-600 mx-2 my-1 p-4 rounded-lg">
                <View className="flex-row">
                    <Image source={{ uri: props.icon }} className="w-16 h-16 mr-4 rounded-full bg-white" />
                    <View className="flex-col gap-3">
                        <Text className="text-white text-2xl">{props.name}</Text>
                        <Text className="text-white">Ver películas</Text>
                    </View>
                </View>
                 <Link href={{ 
                    pathname: "/[id]", 
                    params: { 
                        id: props.name,
                        endpoint: props.endpoint 
                        } 
                    }}  className="rounded-lg" asChild>
                    <Ionicons name="chevron-forward" size={24} color="white" className="ml-auto bg-gray-700 p-4 rounded-full" />
                </Link>
            </View>
       
    );
}