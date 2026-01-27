import { View, Image, Text } from "react-native";

interface CharacterProps {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: string;
    image: string;
}

export default function CharacterCar(props: CharacterProps) {
    return (
        <View className="bg-white p-4 m-4 rounded-3xl shadow-lg">
            <Image
                source={{ uri: props.image }}
                className="w-full h-64 rounded-2xl mr-4 bg-slate-800 resize-cover"
            />
            <View className="mt-4">
                <Text className="text-xl font-bold text-amber-900">{props.name}</Text>
                <View className="mt-2 flex-row items-center">
                    <View className={`w-3 h-3 rounded-full mr-2 ${props.status === "Alive" ? "bg-green-600" : props.status === "Dead" ? "bg-red-600" : "bg-gray-600"}`}/>
                    <Text className="text-amber-800 font-semibold">{props.status} - {props.species}</Text>
                </View>
            </View>
            <View className="bg-amber-100/50 p-3 rounded-lg mt-3">
                <Text className="text-amber-900 text-lg tracking-widest font-bold">ORIGIN</Text>
                <Text className="text-amber-800 text-lg">{props.origin}</Text>
            </View>
            <View className="mt-3 flex-row justify-between items-center">
                <Text className="text-amber-900 text-center italic font-bold text-sm bg-amber-200 px-4 py-2 rounded-full w-20">{props.gender.toUpperCase()}</Text>
                <Text className="text-amber-800 font-semibold mt-2">ID: #{props.id}</Text>
            </View>
        </View>
    );
}