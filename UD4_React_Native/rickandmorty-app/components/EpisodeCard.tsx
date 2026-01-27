import { View, Text } from "react-native";


interface EpisodeProps {
    id: number;
    name: string;
    air_date: string;
    episode: number;
    season: number;
}

export default function EpisodeCard(props: EpisodeProps) {
    return (
        <View className="bg-white rounded-lg border border-gray-300 shadow-md p-4 m-2">
            <Text className="text-xl text-amber-900 font-bold">{props.name}</Text>
            <Text className="text-amber-800 font-medium text-xl">Season {props.season} - Episode {props.episode}</Text>
            <View className="mt-2 border-t border-gray-200 pt-2 flex-row justify-between items-center">
                <Text className="text-gray-400 font-medium">{props.air_date}</Text>
                <Text className="text-white text-center font-bold bg-amber-800 px-4 py-1 rounded-lg w-20">S{props.season}E{props.episode}</Text>
            </View>
        </View>
    );
}