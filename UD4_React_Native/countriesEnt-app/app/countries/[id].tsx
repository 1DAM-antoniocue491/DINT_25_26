import React from 'react';
import { useNavigation } from 'expo-router';
import { View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Text, Image } from 'react-native';
import { getCountry } from '@/data/api';
import { Country } from '@/interfaces/country';


export default function CountryDetailScreen() {
    const { id } = useLocalSearchParams();
    const navigation = useNavigation();
    const [ country, setCountrie ] = React.useState<Country>();

    React.useEffect(() => {
        getCountry(Number(id)).then(setCountrie);
    }, []);

    React.useEffect(() => {
        navigation.setOptions({
            title: country?.name ?? 'Country Details',
        })
    }, [country, navigation])
  
    return (
        <View className="flex-grow bg-neutral-50 p-5">
            <View className="items-center mb-8">
                {/* Imagen, nombre del país y abreviatura  */}
                <Image
                    source={{ uri: country?.media.flag }}
                    className="w-full h-48 mb-4 border border-gray-200 rounded-lg"
                    resizeMode='cover'
                />
                <Text className="text-3xl font-bold text-neutral-800">{country?.name}</Text>
                <Text className="text-gray-400">{country?.abbreviation}</Text>
            </View>

            <View className="bg-white rounded-2xl p-5 shadow-sm">
             {/* Capital, Población, Moneda y Código de teléfono */}
                <View className="mb-4 pb-4 border-b border-gray-100 flex-row justify-between">
                    <Text className='text-neutral-500'>Capital</Text>
                    <Text className="text-lg font-semibold text-neutral-800">{country?.capital}</Text>
                </View>
                <View className="mb-4 pb-4 border-b border-gray-100 flex-row justify-between">
                    <Text className='text-neutral-500'>Población</Text>
                    <Text className="text-lg font-semibold text-neutral-800">{country?.population.toLocaleString()}</Text>
                </View>
                <View className="mb-4 pb-4 border-b border-gray-100 flex-row justify-between">
                    <Text className='text-neutral-500'>Moneda</Text>
                    <Text className="text-lg font-semibold text-neutral-800">{country?.currency}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className='text-neutral-500'>Código de teléfono</Text>
                    <Text className="text-lg font-semibold text-neutral-800">+{country?.phone}</Text>
                </View>
            </View>
        </View>
    );
}
