import { Ionicons } from "@expo/vector-icons";
import { useGlobalSearchParams } from "expo-router";
import { getCityById } from "@/data/Api";
import { ScrollView, View, Image, Text } from "react-native";
import React from "react";


export default function CityInfoScreen() {
    const id = useGlobalSearchParams();
    const [city, setCity] = React.useState(getCityById(Number(id)))

    return (
        <ScrollView className="flex-1 bg-stone-50" showsVerticalScrollIndicator={false}>

            <Image
                source={{ uri: city?.image }}
                className="w-auto h-72"
            />

            {/*View completo con la información de la ruta */}
            <View className="p-6 bg-stone-50">

                <View>
                    <Text className="text-gray-300 font-medium text-sm">LOCALIZADO EN</Text>
                    <Text className="font-bold text-3xl text-emerald-900">Ardales</Text>
                </View>

                <View className="bg-gray-100 p-5 rounded-xl border border-gray-300 flex flex-col gap-3">
                    <View className="flex flex-row">
                        <View className="bg-white p-2.5 rounded-xl border border-stone-200 mr-4">
                            <Ionicons name="people-outline" size={20} color="#064e3b" />
                        </View>
                        <View>
                            <Text className="text-gray-300 font-medium text-sm">POBLACIÓN</Text>
                            <Text className="text-emerald-900 font-medium text-lg">poblacion</Text>
                        </View>
                    </View>
                    <View className="flex flex-row">
                        <View className="bg-white p-2.5 rounded-xl border border-stone-200 mr-4">
                            <Ionicons name="sunny-outline" size={20} color="#064e3b" />
                        </View>
                        <View>
                            <Text className="text-gray-300 font-medium text-sm">CLIMA</Text>
                            <Text className="text-emerald-900 font-medium text-lg">clima</Text>
                        </View>
                    </View>
                </View>

                <View className="mt-10">
                    <Text className="text-gray-300 font-medium text-sm">SOBRE EL MEDITERRANEO</Text>
                    <Text className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis nesciunt voluptates, ad eius eveniet dicta amet cumque incidunt nulla adipisci corrupti temporibus quam excepturi quasi dolorum quibusdam. Delectus, molestias?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam omnis maiores fuga laborum eaque aspernatur qui quam vero reiciendis commodi asperiores, itaque quos ipsam, provident aliquid alias dolor libero quidem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, ducimus similique, eum provident laborum ab mollitia consequatur nulla rerum, earum impedit architecto labore dicta quaerat fuga expedita quos excepturi error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dicta aspernatur iusto tenetur saepe suscipit praesentium esse, incidunt, eum soluta nam! Ipsum sapiente laborum dicta iusto ex? Totam, quia! Corrupti.</Text>
                </View>

            </View>
        </ScrollView>
    );
}
