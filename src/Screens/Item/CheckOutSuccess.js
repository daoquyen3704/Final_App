import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/Item/CheckOutSuccess';

const CheckOutSuccess = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#1D1E20" />
                </TouchableOpacity>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <Image
                    source={require('../../../assets/images/success.png')}
                    style={styles.successImage}
                />
                <Text style={styles.title}>Order Confirmed!</Text>
                <Text style={styles.description}>
                    Your order has been confirmed, we will send you confirmation email shortly.
                </Text>
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.ordersButton}
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Text style={styles.ordersButtonText}>Go to Orders</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={() => navigation.navigate('Main')}
                >
                    <Text style={styles.continueButtonText}>Continue Shopping</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default CheckOutSuccess;