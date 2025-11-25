import * as Haptics from 'expo-haptics';
import { Pressable, Text, View } from "react-native";

interface ButtonProps {
    label: string;
    onPress?: ()=> void;
    onLongPress?: ()=> void;
    position?: "left" | "right";
}

export default function Button({label, onPress, onLongPress, position="right"}: ButtonProps) {
    const positionButton = position == "right" ? 'right-10' : 'left-10'

    const handlePress = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        onPress?.();
    }

    return (
        <Pressable onPress={handlePress} onLongPress={onLongPress} delayLongPress={300} className={`absolute ${positionButton} bottom-10`}>
            {
                ({pressed}) => (
                    <View className={`${pressed? 'bg-blue-800/90' : 'bg-blue-800'} p-5 rounded-lg shadow-xl shadow-gray-400`}>
                        <Text className="text-white font-bold text-xl">{label}</Text>
                    </View>
                )
            }
        </Pressable>
    )
}