import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import '../global.css';


export default function Index() {
  const [btnState, setBtnState] = useState<boolean>(false);
  const [time, setTime] = useState<number>(10);
  const [pulsaciones, setPulsaciones] = useState<number>(0);

  const handleButtonStart = () => {
    setBtnState(!btnState);
  }

  const handleButtonStop = () => {
    setBtnState(!btnState);
    setTime(10);
    setPulsaciones(0);
  }

  const sumarPulsacion = () => {
    if (btnState) {
      setPulsaciones(pulsaciones + 1);
    }
  }

  React.useEffect(() => {
    if (!btnState) return;

    if (time < 1) {
      Alert.alert('El juego a terminado', "Has realizado: " + pulsaciones + " pulsaciones", [
        {text: 'OK'},
      ]);

      setBtnState(false);
      setTime(10);
      setPulsaciones(0);
      return;
    }

    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [btnState, time]);

  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <View className="flex-1 justify-center items-center">
        <View className="flex-row items-center border-2  px-4 py-1 rounded-full border-emerald-300">
          <MaterialIcons name="touch-app" size={35} color={'#5ee9b5'} />
          <Text className="text-emerald-300 text-5xl font-bold">Press the cookie</Text>
        </View>

        <Pressable onPress={sumarPulsacion}>
          {
            ({pressed}) => (
              <Image source={require('../assets/images/perfectCookie.png')} alt="Galleta" resizeMode="contain" className={`w-80 ${pressed? 'w-72' : ''}`}/>
            )
          }
        </Pressable>

        {
          btnState == false ?
          <Pressable onPress={handleButtonStart} className="flex-row items-center bg-emerald-600 gap-2 px-14 py-2 rounded-full">
            <MaterialIcons name="play-circle-outline" size={29} color='white' />
            <Text className="text-4xl text-white font-bold">Start</Text>
          </Pressable>
          :
          <Pressable onPress={handleButtonStop} className="flex-row items-center bg-red-600 gap-2 px-10 py-2 rounded-full">
            <MaterialIcons name="stop-circle" size={29} color='white' />
            <Text className="text-4xl text-white font-bold">Playing</Text>
          </Pressable>
        }
        

        <View className="flex-row gap-40 mt-10">
          <View className="flex-col items-center">
            <Text className="text-white text-xl font-light">Tiempo</Text>
            <Text className="text-white text-6xl font-light">00:{time}</Text>
          </View>
          <View className="flex-col items-center">
            <Text className="text-white text-xl font-light">Pulsaciones</Text>
            <Text className="text-emerald-400 text-6xl font-light">{pulsaciones}</Text>
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
}
