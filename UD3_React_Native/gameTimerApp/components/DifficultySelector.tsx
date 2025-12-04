import React from "react";
import { View, Pressable, Text } from "react-native";

interface DifficultySelectorProps {
    difficulty: string;
    selectMode: ((dificultad: string) => void);
    disabled: boolean;
}

export default function DifficultySelector(props: DifficultySelectorProps) {

    return (
        <View className="flex-row gap-3 mt-5">
            <Pressable
                className={`border rounded-full px-7 py-2 ${props.difficulty == "fácil" ? 'bg-emerald-500 border-emerald-200' : 'bg-slate-700 border-gray-400'} `}
                onPress={() => props.selectMode("fácil")}
                disabled={props.disabled}
            >
                <Text className="text-white text-2xl font-semibold text-center">Fácil</Text>
            </Pressable>

            <Pressable
                className={`border rounded-full px-7 py-2 ${props.difficulty == "normal" ? 'bg-emerald-500 border-emerald-200' : 'bg-slate-700 border-gray-400'} `}
                onPress={() => props.selectMode("normal")}
                disabled={props.disabled}
            >
                <Text className="text-white text-2xl font-semibold text-center">Normal</Text>
            </Pressable>

            <Pressable
                className={`border rounded-full px-7 py-2 ${props.difficulty == "difícil" ? 'bg-emerald-500 border-emerald-200' : 'bg-slate-700 border-gray-400'} `}
                onPress={() => props.selectMode("difícil")}
                disabled={props.disabled}
            >
                <Text className="text-white text-2xl font-semibold text-center">Difícil</Text>
            </Pressable>
        </View>
    );
}