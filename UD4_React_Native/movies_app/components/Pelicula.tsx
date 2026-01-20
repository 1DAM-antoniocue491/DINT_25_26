import React from "react";
import { Text, Image, View, Pressable } from "react-native";

export type MovieProps = {
  id: number;
  title: string;
  posterURL: string;
  imdbId: string;
}

export default function Pelicula(props: MovieProps) {
    return (
        <View className="bg-gray-700 rounded-lg m-2" style={{ width: '47%' }}>
            <Image source={{ uri: props.posterURL }} style={{ width: '100%', height: 192, borderTopRightRadius: 8, borderTopLeftRadius: 8 }} />
            <View className="p-4">
                <Text className="text-white text-xl font-bold">{props.title}</Text>
                <Pressable className="bg-gray-600 p-2 rounded-lg mt-2">
                    <Text className="text-white text-center font-bold">Ver en IMDb</Text>
                </Pressable>
            </View>
        </View>
    )
};