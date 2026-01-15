import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function IdPage() {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>Animacion Screen</Text>
        </View>
    );
}