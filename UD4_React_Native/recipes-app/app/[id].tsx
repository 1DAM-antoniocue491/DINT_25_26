import NutritionCard from '@/components/NutritionCard';
import { getRecipesById } from '@/data/Api';
import { IRecipe } from '@/types/Interfaces';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function IdPage() {
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();
    //const [ food ] = React.useState(getDataById(Number(id)));
    const [ recipe, setRecipe ] = React.useState<IRecipe>();

    React.useEffect(() => {
        navigation.setOptions({
            title: recipe?.title ?? 'Comida'
        })
    }, [recipe])

    React.useEffect(() => {
        const loadData = async () => {
            try {
                const recipeJSON = await getRecipesById(Number(id));
                setRecipe(recipeJSON);
            } catch (error) {
                console.error("Error loading data:", error);
            } finally {
                console.log("Data loading attempt finished.");
            }
        };
        loadData();
    }, [])

    return (
        <View className="flex-1 p-4 bg-white">
            <Image
                source={{ uri: recipe?.photoUrl || 'https://via.placeholder.com/300' }}
                className="w-full h-60 rounded-lg mb-4"
                resizeMode="cover"
            />

            <Text className="text-base">{recipe?.description}</Text>
            
            {recipe && (
                <NutritionCard
                    calories={recipe.calories}
                    fat={recipe.fat}
                    cholesterol={recipe.cholesterol}
                    sodium={recipe.sodium}
                    sugar={recipe.sugar}
                    carbohydrate={recipe.carbohydrate}
                    fiber={recipe.fiber}
                    protein={recipe.protein}
                />
            )}

            
        </View>
    );
}

// <Text className="mt-4 text-lg"> <Ionicons name="checkbox-outline" size={20} /> Nivel: {recipe?.nivel}</Text>
// <Text className="mt-4 text-lg"> <Ionicons name="time-outline" size={20} /> Tiempo de preparación: {recipe?.tiempo} minutos</Text>
            