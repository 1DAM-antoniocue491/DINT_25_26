import { Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import * as Haptics from 'expo-haptics';
import Card from "../components/Card"

export default function Index() {
  const [cuenta, setCuenta] = React.useState<number>(1);
  const [personas, setPersona] = React.useState<number>(1);
  const [resultado, setResultado] = React.useState<number>(1);

  const handlePlusCuenta = () => {
    setCuenta(cuenta+1);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }

  const handleLessCuenta = () => {
    if (cuenta > 1) {
      setCuenta(cuenta-1);
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }

  const handleLongPlusCuenta = () => {
    setCuenta(cuenta+5);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }

  const handleLongLessCuenta = () => {
    if (cuenta > 5) {
      setCuenta(cuenta-5);
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }

  const handlePlusPersona = () => {
    setPersona(personas+1);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }

  const handleLessPersona = () => {
    if (personas > 1) {
      setPersona(personas-1);
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  }

  const handleLongPlusPersona = () => {
    setPersona(personas+2);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }

  const handleLongLessPersona = () => {
    if (personas > 2) {
      setPersona(personas-2);
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  }

  const rerset = () => {
    setResultado(1);
    setCuenta(1);
    setPersona(1);
    Haptics.NotificationFeedbackType.Success;
  }

  React.useEffect (() => {
    setResultado(cuenta/personas)
  }, [cuenta, personas])

  return (
    <SafeAreaView className="flex-1 bg-indigo-950 items-center p-5">

      {/* Título: icono y texto */}
      <View className="flex-col items-center">
        <Ionicons color="white" name="cash-outline" size={80} />
        <Text className="text-white text-8xl font-light">Slit EZ</Text>
      </View>

      <View className="w-full mt-28 gap-3">
        {/* Cuenta */}
        <Card title="Cuenta" cuenta={cuenta} onPressPlus={handlePlusCuenta} onPressLess={handleLessCuenta} onPressLongPlus={handleLongPlusCuenta} onPressLongLess={handleLongLessCuenta} symbol={true}/>

        {/* Personas */}
        <Card title="Personas" cuenta={personas} onPressPlus={handlePlusPersona} onPressLess={handleLessPersona} onPressLongPlus={handleLongPlusPersona} onPressLongLess={handleLongLessPersona} symbol={false}/>
      

        {/* Resultado */}
        <View className="bg-cyan-900 h-16 p-3 pt-4 rounded-2xl flex-row justify-between">
          <Text className="text-gray-300 font-light">Resultado</Text>

          <Text className="text-white font-bold text-4xl">{resultado.toFixed(2)} €</Text>
        </View>

        {/* Reiniciar */}
        <View className="items-center">
          <Pressable onPress={rerset} className="flex-row bg-cyan-400 w-40 p-3 rounded-full items-center gap-3">
            <Ionicons name="refresh-outline" size={30}/>
            <Text className="text-2xl">Reiniciar</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
