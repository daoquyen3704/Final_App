import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Animated,
    Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/Initial/OnBoarding';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const ContentCard = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <Animated.View style={[styles.contentCard, { opacity: fadeAnim }]}>
            <Text style={styles.title}>Look Good, Feel Good</Text>
            <Text style={styles.description}>
                Create your individual & unique style and look amazing everyday.
            </Text>

            <View style={styles.genderButtons}>
                <TouchableOpacity style={[styles.genderButton, styles.menButton]}>
                    <Text style={styles.menButtonText}>Men</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.genderButton, styles.womenButton]}>
                    <Text style={styles.womenButtonText}>Women</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.skipButton}
                onPress={() => navigation.navigate('Auth')}
            >
                <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default function OnBoardingScreen() {
    const navigation = useNavigation(); // Thêm hook navigation

    // useEffect(() => {
    //     const checkLogin = async () => {
    //         const user = await AsyncStorage.getItem('loggedInUser');
    //         if (user) {
    //             navigation.replace('Main');
    //         } else {
    //             navigation.replace('Login');
    //         }
    //     };
    //     checkLogin();
    // }, []);
    return (
        <LinearGradient
            colors={['#B0A3E5', '#7661C5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.17, y: 1 }}
            style={styles.container}
        >
            <View style={{ flex: 1 }}>
                <Image
                    source={require('../../../assets/images/onboarding.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
            <ContentCard />
        </LinearGradient>
    );
}
