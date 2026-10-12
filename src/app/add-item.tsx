import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { useMenu } from '../context/MenuContext';
import { Course } from '../types/MenuItem';
import { Colors } from '../constants/Colors';

export default function AddItemScreen() {
  const router = useRouter();
  const { addMenuItem } = useMenu();

  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<Course>('Starter');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState<{ dishName?: string; price?: string }>({});

  const validate = () => {
    const newErrors: { dishName?: string; price?: string } = {};

    if (!dishName.trim()) {
      newErrors.dishName = 'Dish name is required';
    }

    const priceValue = parseFloat(price);
    if (!price.trim()) {
      newErrors.price = 'Price is required';
    } else if (isNaN(priceValue) || priceValue <= 0) {
      newErrors.price = 'Price must be a valid number greater than 0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validate()) return;

    addMenuItem({
      id: Date.now().toString(),
      dishName: dishName.trim(),
      description: description.trim(),
      course,
      price: parseFloat(price),
    });

    Alert.alert('Success', 'Menu item added successfully!', [
      { text: 'OK', onPress: () => router.back() },
    ]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.field}>
        <Text style={styles.label}>Dish Name *</Text>
        <TextInput
          style={[styles.input, errors.dishName && styles.inputError]}
          placeholder="e.g., Beef Burgundy"
          value={dishName}
          onChangeText={setDishName}
          placeholderTextColor={Colors.textLight}
        />
        {errors.dishName && (
          <Text style={styles.errorText}>{errors.dishName}</Text>
        )}
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          placeholder="Describe the dish..."
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          placeholderTextColor={Colors.textLight}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Course *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={course}
            onValueChange={(value) => setCourse(value as Course)}
          >
            <Picker.Item label="Starter" value="Starter" />
            <Picker.Item label="Main Course" value="Main Course" />
            <Picker.Item label="Dessert" value="Dessert" />
          </Picker>
        </View>
      </View>

      <View style={styles.field}>
        <Text style={styles.label}>Price *</Text>
        <TextInput
          style={[styles.input, errors.price && styles.inputError]}
          placeholder="0.00"
          value={price}
          onChangeText={setPrice}
          keyboardType="decimal-pad"
          placeholderTextColor={Colors.textLight}
        />
        {errors.price && <Text style={styles.errorText}>{errors.price}</Text>}
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>SAVE ITEM</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => router.back()}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { padding: 16 },
  field: { marginBottom: 20 },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  input: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: Colors.text,
  },
  inputError: { borderColor: Colors.danger },
  multiline: { height: 100 },
  pickerContainer: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
  },
  errorText: { color: Colors.danger, fontSize: 14, marginTop: 4 },
  saveButton: {
    backgroundColor: Colors.success,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  saveButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
  cancelButton: { padding: 16, alignItems: 'center' },
  cancelButtonText: { color: Colors.textLight, fontSize: 16 },
});