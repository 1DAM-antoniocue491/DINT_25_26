import EpisodeCard from '@/components/EpisodeCard';
import { getEpisodes } from '@/data/api';
import { Episode } from '@/types/Interfaces';
import React from 'react';
import { View, ActivityIndicator, Text, FlatList, TextInput } from 'react-native';

export default function Episodes() {
    const [episodes, setEpisodes] = React.useState<Episode[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [search, setSearch] = React.useState<string>("");
    const [filteredEpisodes, setFilterEpisodes] = React.useState<Episode[]>();

    const filter = (text: string) => {
        setSearch(text)
    }

    React.useEffect(() => {
        if (search.length > 0) {
            const findEpisodes = episodes.filter((episode) =>
                episode.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilterEpisodes(findEpisodes);
        } else {
            setFilterEpisodes(episodes);
        }
    }, [search])
    
    React.useEffect(() => {
        const fetchEpisodes = async () => {
            try {
                const data = await getEpisodes();
                setEpisodes(data);
                setFilterEpisodes(data);
            } catch (error) {
                console.error("Error fetching characters:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEpisodes();
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
            <View className="px-4 py-2 bg-white border-b border-gray-100">
                <TextInput
                    placeholder="Search episode by name..."
                    className="h-10 px-4 bg-gray-100 rounded-lg text-gray-800"
                    value={search}
                    onChangeText={text => filter(text)}
                />
            </View>
            <FlatList
                data={filteredEpisodes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return <EpisodeCard {...item} />;
                }}
            />
        </View>
    );
}