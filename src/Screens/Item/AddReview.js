import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import styles from '../../styles/Item/AddReview';

const AddReview = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [experience, setExperience] = useState('');
    const [rating, setRating] = useState(3);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Add Review</Text>
                <View style={{ width: 24 }} />
            </View>

            <View style={styles.content}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Type your name"
                        placeholderTextColor="#8F959E"
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>How was your experience ?</Text>
                    <TextInput
                        style={[styles.input, styles.experienceInput]}
                        placeholder="Describe your experience?"
                        placeholderTextColor="#8F959E"
                        multiline
                        value={experience}
                        onChangeText={setExperience}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Star</Text>
                    <View style={styles.sliderContainer}>
                        <Text style={styles.sliderValue}>0.0</Text>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={5}
                            value={rating}
                            onValueChange={setRating}
                            minimumTrackTintColor="#9775FA"
                            maximumTrackTintColor="#F5F6FA"
                            thumbTintColor="#9775FA"
                        />
                        <Text style={styles.sliderValue}>5.0</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit Review</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};



export default AddReview;