import { useLocalSearchParams, useNavigation } from 'expo-router';
import React from 'react';
import { getDataById } from '@/data/Api';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();
    const [ food ] = React.useState(getDataById(Number(id)));

    React.useEffect(() => {
        navigation.setOptions({
            title: food?.titulo ?? 'Recipe Details',
        });
    }, [food])

    return (
        <View className="flex-1 p-4 bg-white">
            <Text className="text-3xl font-light mb-4 text-center">{food?.titulo}</Text>
            <Image
                source={{ uri: food?.imagen }}
                className="w-full h-60 rounded-lg mb-4"
                resizeMode="cover"
            />
            <Text className="text-base">{food?.descripcion}</Text>
            
            <Text className="mt-4 text-lg"> <Ionicons name="checkbox-outline" size={20} /> Nivel: {food?.nivel}</Text>
            <Text className="mt-4 text-lg"> <Ionicons name="time-outline" size={20} /> Tiempo de preparación: {food?.tiempo} minutos</Text>
            
            
        </View>
    );
}