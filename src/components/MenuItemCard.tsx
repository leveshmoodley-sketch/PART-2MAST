import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MenuItem } from '../types/MenuItem';
import { Colors } from '../constants/Colors';

const courseColors: Record<string, string> = {
  Starter: Colors.starterTag,
  'Main Course': Colors.mainTag,
  Dessert: Colors.dessertTag,
};

export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.dishName}>{item.dishName}</Text>
        <Text style={styles.price}>R {item.price.toFixed(2)}</Text>
      </View>
      <View
        style={[
          styles.courseTag,
          { backgroundColor: courseColors[item.course] },
        ]}
      >
        <Text style={styles.courseText}>{item.course}</Text>
      </View>
      {item.description ? (
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    flex: 1,
  },
  price: { fontSize: 16, fontWeight: '600', color: Colors.success },
  courseTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  courseText: { color: '#FFFFFF', fontSize: 12, fontWeight: '600' },
  description: { color: Colors.textLight, fontSize: 14, marginTop: 4 },
});