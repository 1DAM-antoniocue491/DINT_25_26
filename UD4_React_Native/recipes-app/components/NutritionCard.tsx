import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

interface NutritionProps {
  calories: number | string;
  fat: string;
  cholesterol: string;
  sodium: string;
  sugar: string;
  carbohydrate: string;
  fiber: string;
  protein: string;
}

export default function NutritionCard({
  calories,
  fat,
  cholesterol,
  sodium,
  sugar,
  carbohydrate,
  fiber,
  protein,
}: NutritionProps) {
  const nutrients = [
    { name: 'Calories', value: Number(calories) },
    { name: 'Fat', value: parseFloat(fat) },
    { name: 'Cholesterol', value: parseFloat(cholesterol) },
    { name: 'Sodium', value: parseFloat(sodium) },
    { name: 'Sugar', value: parseFloat(sugar) },
    { name: 'Carbs', value: parseFloat(carbohydrate) },
    { name: 'Fiber', value: parseFloat(fiber) },
    { name: 'Protein', value: parseFloat(protein) },
  ];

  const styles = StyleSheet.create({
    card: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 16,
      marginVertical: 10,
      marginHorizontal: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    label: {
      fontSize: 14,
      flex: 1,
    },
    value: {
      fontSize: 14,
      marginLeft: 8,
    }
  });

  return (
  <View style={styles.card}>
    <Text style={styles.title}>Nutritional Information</Text>
      {nutrients.map((n) => (
        <View key={n.name} style={styles.row}>
          <Text style={styles.label}>{n.name}</Text>
          <Text style={styles.value}>{n.value}</Text>
        </View>
      ))}
    </View>
  );
}

