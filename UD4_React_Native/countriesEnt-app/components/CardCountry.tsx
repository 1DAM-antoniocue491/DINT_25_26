import { Ionicons } from '@expo/vector-icons';
import { Link, RelativePathString } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

interface CardCountryProps {
    imageUrl: string;
    countryName: string;
    abreviatura: string;
    href: string;
}

export default function CardCountry(props: CardCountryProps) {
    return (
        <View className="flex-row items-center justify-between p-4 border border-neutral-200 rounded-xl shadow-black shadow-sm mb-4 bg-white">
            <View className='flex-row items-center'>
                <Image
                    source={{ uri: props.imageUrl }}
                    className="w-12 h-8 mr-5"
                    resizeMode='cover'
                />
                <View>
                    <Text className="flex-1 text-lg">{props.countryName}</Text>
                    <Text className="text-gray-500 mr-2">{props.abreviatura}</Text>
                </View>
            </View>
            <Link href={props.href as RelativePathString} asChild>
                <Pressable>
                    <Ionicons name="chevron-forward" size={24} color="#38bdf8" />
                </Pressable>
            </Link>
        </View>
    )
}