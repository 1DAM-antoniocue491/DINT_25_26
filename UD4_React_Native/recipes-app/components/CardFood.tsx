import { Link, RelativePathString } from "expo-router";
import { Pressable, Image, Text } from "react-native";

interface CardFoodProps {
    id: number;
    title: string;
    imagen: string;
    href: string;
}

export default function CardFood(props: CardFoodProps) {
    return (
        <Link href={`${props.href}` as RelativePathString} className="rounded-lg" asChild >
            <Pressable className="bg-white rounded-lg shadow-black">
                <Image
                    source={{ uri: props.imagen }}
                    className="w-full h-40 rounded-t-lg"
                    resizeMode="cover"
                />
                <Text
                    className="p-2 font-bold"
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >{props.title}</Text>
            </Pressable>
        </Link>
    );
}