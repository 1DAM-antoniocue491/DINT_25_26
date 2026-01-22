import { Ionicons } from '@expo/vector-icons';
import { Link, RelativePathString } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { getCountries } from '../../data/api';
import { Country } from '../../interfaces/country';
import CardCountry from '@/components/CardCountry';

export default function CountryListScreen() {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        getCountries().then(setCountries);
    }, []);

    return (
        <View className="flex-1 bg-neutral-50 p-5">
            <FlatList
                data={countries}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <CardCountry 
                        imageUrl={item.media.flag}
                        countryName={item.name}
                        abreviatura={item.abbreviation}
                        href={`/countries/${item.id}`}
                    />
                )}
            />
        </View>
    );
}
