import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/Initial/Auth';

export default function AuthScreen() {
    const { colors } = useTheme();
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={require('../../../assets/images/back.png')}
                    style={styles.backIcon}
                />
            </TouchableOpacity>

            <Text style={styles.title}>Let's Get Started</Text>

            <View style={styles.socialButtons}>
                <TouchableOpacity
                    style={[styles.socialButton, styles.facebookButton]}
                    onPress={() => { }}
                >
                    <Image
                        source={require('../../../assets/images/facebook.png')}
                        style={styles.socialIcon}
                    />
                    <Text style={styles.socialButtonText}>Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.socialButton, styles.twitterButton]}
                    onPress={() => { }}
                >
                    <Image
                        source={require('../../../assets/images/twitter.png')}
                        style={styles.socialIcon}
                    />
                    <Text style={styles.socialButtonText}>Twitter</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.socialButton, styles.googleButton]}
                    onPress={() => { }}
                >
                    <Image
                        source={require('../../../assets/images/google.png')}
                        style={styles.socialIcon}
                    />
                    <Text style={styles.socialButtonText}>Google</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.signInText}>Signin</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.createAccountButton}>
                    Create an Account
                </Text>
            </TouchableOpacity>
        </View>
    );
}
