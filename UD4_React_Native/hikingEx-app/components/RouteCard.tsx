import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Image, Text, View } from "react-native";

interface RouteCardProps {
    id: number;
    title: string;
    description: string;
    difficulty: 'Fácil' | 'Moderada' | 'Difícil';
    distance: string; 
    duration: string; 
    image: string;
    elevationGain: string;
    cityId: number;
}

export default function RouteCard(props: RouteCardProps) {
    return (
        <Link href={`/route/${props.id}`} className="rounded-lg" asChild >
            <Pressable className="border mb-8 rounded-b-lg border-gray-200 shadow">
               <Image
                    source={{ uri: props.image }}
                    className="w-auto h-52"
                    resizeMode='cover'
                />

                <View className="p-3">
                    <View className="flex flex-row justify-between border-b border-gray-200 pb-3 mb-3">
                        <Text className="font-bold text-xl text-emerald-900">{props.title}</Text>
                        <Text className={`p-1 rounded ${props.difficulty === "Fácil" ? "bg-green-100  text-green-800" : props.difficulty === "Moderada" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>{props.difficulty}</Text>
                    </View>

                    <View className="flex flex-row justify-between">
                        <View className="flex flex-row items-center gap-2">
                            <Ionicons name="resize-outline" size={16} color="#064e3b" />
                            <Text className="text-emerald-900 font-medium text-xs">{props.distance}</Text>
                        </View>
                        <View className="flex flex-row items-center gap-2">
                            <Ionicons name="time-outline" size={16} color="#064e3b" />
                            <Text className="text-emerald-900 font-medium text-xs">{props.duration}</Text>
                        </View>
                        <View className="flex flex-row items-center gap-2">
                            <Ionicons name="trending-up-outline" size={16} color="#064e3b" />
                            <Text className="text-emerald-900 font-medium text-xs">{props.elevationGain}</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        </Link>
    );
}
