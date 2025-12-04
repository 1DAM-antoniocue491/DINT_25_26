import { View, Text, Pressable } from "react-native"

interface CardProps {
    title: string;
    cuenta: number;
    onPressPlus: (() => void);
    onPressLongLess: (() => void);
    onPressLongPlus: (() => void);
    onPressLess: (() => void);
    symbol: boolean;
}

export default function Button (props: CardProps) {
    return (
        <View className="bg-indigo-400/50 h-28 p-3 pt-4 rounded-2xl">
            <Text className="text-gray-300 font-light">{props.title}</Text>

            <View className="flex-row justify-between items-center mt-1">
            <Pressable onPress={props.onPressLess} onLongPress={props.onPressLongLess} delayLongPress={300} className="border rounded-full px-5 items-center justify-center border-cyan-300">
                <Text className="text-cyan-300 text-7xl font-thin">-</Text>
            </Pressable>

            <Text className="text-5xl font-bold text-white">{props.cuenta} {props.symbol ? '€' : ''}</Text>

            <Pressable onPress={props.onPressPlus} onLongPress={props.onPressLongPlus} delayLongPress={300} className="border rounded-full px-3 items-center justify-center border-cyan-300">
                <Text className="text-cyan-300 text-7xl font-thin">+</Text>
            </Pressable>
            </View>
        </View>
    )
}