import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import * as Haptics from 'expo-haptics';
import { Pressable, Text, View, Image, Alert } from 'react-native';

interface CardFoodProps {
    nombre: string;
    imagen: string;
    kcal: number;
    sumCalories: (kcal: number) => void;
    resCalories: (kcal: number) => void;
    reset: boolean;
}

export default function CardFood(props: CardFoodProps) {
    const [numPulsaciones, setNumPulsaciones] = React.useState(0);

    React.useEffect(() => {
        setNumPulsaciones(0);
    }, [props.reset]);


    const onPress = () => {
        setNumPulsaciones(numPulsaciones+1);
        props.sumCalories(props.kcal);
        if(numPulsaciones>9) {
            Alert.alert("Máximo de raciones", "Hay un máximo de 10 raciones por alimento", [{text: "Aceptar"}]);
            setNumPulsaciones(10);
        }
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }

    const onLongPress = () => {
        if(numPulsaciones>0){
            setNumPulsaciones(numPulsaciones-1);
            props.resCalories(props.kcal);
            Haptics.selectionAsync();
        }
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    }

    return (
        <View className="w-1/3 items-center justify-center">
            <Pressable
                className="mb-1 aspect-square flex-col gap-2 items-center bg-emerald-700 p-3 rounded-lg"
                onPress={onPress}
                onLongPress={onLongPress}
                delayLongPress={200}
            >
                <Image className="w-14 h-14" source={{uri: props.imagen}}></Image>
                <Text className="text-white text-2xl">{props.nombre}</Text>
                <Text className="text-white text-sm">{props.kcal} kcal</Text>
                <View className={`absolute top-0 right-0 py-1 px-2 m-1 ${numPulsaciones > 0 ? 'bg-white/70 rounded-xl' : ''}`}>
                    <Text className={`${numPulsaciones > 0 ? 'text-black' : 'text-white/0'}`}>{numPulsaciones}</Text>
                </View>
            </Pressable>
        </View>
    )
}
