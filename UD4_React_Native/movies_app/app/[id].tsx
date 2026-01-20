import Pelicula from "@/components/Pelicula";
import { Movie } from "@/types/Interface";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React from "react";
import { FlatList, View } from "react-native";
import { getMoviesByCategory } from "../data/api";

export default function IdPage() {
    const { id, endpoint } = useLocalSearchParams();
    const navigation = useNavigation();

    const [ movies, setMovies ] = React.useState<Movie[]>([]);

    React.useEffect(() => {
        navigation.setOptions({
            title: id ?? 'Movie'
        })
    }, [id, navigation])
    
    React.useEffect(() => {
        const fetchMovies = async () => {   
            try {
                const moviesData = await getMoviesByCategory(endpoint as string);
                setMovies(moviesData);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        fetchMovies();
    }, []);

    return (
        <View className="bg-gray-800 flex-1 p-2">
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Pelicula id={item.id} title={item.title} posterURL={item.posterURL} imdbId={item.imdbId} />
                )}
                numColumns={2}
            />
        </View>
    );
}