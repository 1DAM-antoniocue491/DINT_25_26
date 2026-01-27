import { Character } from '@/types/Interfaces';
import React from 'react';
import { View, Text, Image, ActivityIndicator, FlatList } from 'react-native';
import { getCharacters } from '@/data/api';
import CharacterCar from './CharacterCar';

export default function CharacterCard() {
    const [characters, setCharacters ] = React.useState<Character[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await getCharacters();
                setCharacters(data);
            } catch (error) {
                console.error("Error fetching characters:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center bg-gray-50">
                <ActivityIndicator size="small" color="#3b82f6" />
                <Text className="mt-3 text-gray-500 font-medium">Loading characters...</Text>
            </View>
        );
    }

    return (
        <View className="flex-1 bg-white">
            <FlatList
                data={characters}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return <CharacterCar {...item} />;
                }}
            />
        </View>
    );
}