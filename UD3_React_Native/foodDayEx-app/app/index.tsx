import CardFood from "@/components/CardFood";
import { getData } from "@/data/Api";
import { IFood } from "@/types/Interfaces";
import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from 'expo-haptics';

export default function Index() {
  const foodList = getData();
  const [totalKcal, setTotalKcal] = React.useState(0);
  const [objetivo, setObjetivo] = React.useState(1400);
  const [reset, setReset] = React.useState(false);

  const sumCalories = (kcal: number) => {
    setTotalKcal(totalKcal + kcal);
    setObjetivo(objetivo - kcal);
  };

  const resCalories = (kcal: number) => {
    setTotalKcal(totalKcal - kcal);
    setObjetivo(objetivo + kcal);
  };

  const resetCalories = () => {
    setTotalKcal(0);
    setObjetivo(1400);
    setReset(!reset);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  return (
    <SafeAreaView className="flex-1 bg-emerald-100/50">
      <View className="flex-1 flex-col justify-around">
        {/* Cabecera */}
        <View className="mb-6">
          <Text className="text-7xl font-bold text-center text-emerald-900">
            Calcula tus Kcal
          </Text>
          <Text className="text-lg text-center text-emerald-800">
            Selecciona los alimentos que formarían tu comida de hoy para controlar el número de calorías diarias
          </Text>
        </View>

        {/*Panel de alimentos*/}
        <View className="flex-row flex-wrap p-2">
          {
            foodList.map((food, index) => (
              <CardFood key={index} nombre={food.name} imagen={food.icon} kcal={food.kcal} sumCalories={sumCalories} resCalories={resCalories} reset={reset}/>
            ))
          }
        </View>

        {/* Calorías totales */}
        <View className="p-3 bg-emerald-700 m-2 rounded-lg">
          <View className="flex-row justify-between items-center">
            <Text className="text-3xl font-bold text-white">Calorías consumidas</Text>
            <Text className="text-3xl font-bold text-white">{totalKcal} Kcal</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-lg font-light text-gray-300">Objetivo</Text>
            <Text className="text-lg font-light text-gray-300">1400 Kcal</Text>
          </View>
        </View>

        {/* Evaluación */}
        <View className="flex-row justify-between items-center p-4">
          {/* Objetivo */}
          <View className="flex-col items-center">
            <Text className="text-xl font-bold text-emerald-700">Para el objetivo:</Text>
            <Text className={`text-6xl font-medium ${objetivo>0 ? 'text-emerald-700' : 'text-red-700'}`}>{objetivo>0 ? '+' : ''} {objetivo} Kcal</Text>
          </View>
          {/* Botón de reinicio */}
          <View className="">
            <Pressable onPress={resetCalories}>
              <Ionicons name="refresh-circle" size={60} color={'#065f46'}/>
            </Pressable>
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
}
