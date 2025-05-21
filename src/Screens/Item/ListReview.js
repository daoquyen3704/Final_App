import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
    Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/Item/ListReview';
import reviewData from '../../../assets/data/review.json';

const ListReview = () => {
    const navigation = useNavigation();
    const [reviews, setReviews] = useState([]);

    const averageRating = 4.8; // Hardcoded as per the image; can be calculated dynamically
    const totalReviews = 245;  // Hardcoded as per the image

    useEffect(() => {
        try {
            if (reviewData && Array.isArray(reviewData)) {
                setReviews(reviewData);
            } else {
                throw new Error('Invalid review data');
            }
        } catch (error) {
            console.error('Error loading reviews:', error);
            Alert.alert('Error', 'Failed to load reviews.');
        }
    }, []);

    const renderReview = ({ item }) => (
        <View key={item.id} style={styles.reviewItem}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View style={styles.reviewContent}>
                <View style={styles.reviewHeader}>
                    <Text style={styles.reviewerName}>{item.name}</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.reviewRating}>{item.rating}</Text>
                        <Ionicons name="star" size={14} color="#FFC120" />
                    </View>
                </View>
                <Text style={styles.reviewDate}>{item.date}</Text>
                <Text style={styles.reviewText} numberOfLines={2}>{item.comment}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Reviews</Text>
                <View style={{ width: 24 }} />
            </View>

            <View style={styles.subHeader}>
                <View>
                    <Text style={styles.reviewCount}>{totalReviews} Reviews</Text>
                    <View style={styles.ratingContainer}>
                        <Text style={styles.reviewRating}>{averageRating}</Text>
                        <Ionicons name="star" size={14} color="#FFC120" />
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.addReviewButton}
                    onPress={() => navigation.navigate('AddReview')}
                >
                    <Text style={styles.addReviewText}>Add Review</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={reviews}
                renderItem={renderReview}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.reviewsList}
                ListEmptyComponent={
                    <Text style={{ textAlign: 'center', padding: 20, color: '#666' }}>
                        No reviews available.
                    </Text>
                }
            />
        </SafeAreaView>
    );
};

export default ListReview;