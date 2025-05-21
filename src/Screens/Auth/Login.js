import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Switch,
    KeyboardAvoidingView,
    Platform,
    Alert,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../../styles/Auth/Login';
import users from '../../../assets/data/user.json';

export default function LoginScreen() {
    const { colors } = useTheme();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const navigation = useNavigation();

    const handleLogin = async () => {
        // Load user mới đăng ký từ AsyncStorage (nếu có)
        const storedUser = await AsyncStorage.getItem('user');
        let allUsers = [...users];

        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            allUsers.push(parsedUser);
        }

        // Tìm user khớp username + password
        const found = allUsers.find(
            u => u.username === username && u.password === password
        );

        if (found) {
            if (remember) {
                await AsyncStorage.setItem('loggedInUser', JSON.stringify(found));
            }
            navigation.navigate('Main');
        } else {
            Alert.alert('Đăng nhập thất bại', 'Sai tên đăng nhập hoặc mật khẩu');
        }
    };


    return (
        <KeyboardAvoidingView
            style={[styles.container, { backgroundColor: colors.background }]}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Image
                    source={require('../../../assets/images/back.png')}
                    style={styles.backIcon}
                />
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.subtitle}>Please enter your data to continue</Text>

                <View style={styles.formWrapper}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={[styles.input, { color: colors.text }]}
                        placeholder="Enter your username"
                        placeholderTextColor="#999"
                        value={username}
                        onChangeText={setUsername}
                    />

                    <View style={styles.inputWrapper}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={[styles.input, { color: colors.text }]}
                            placeholder="Enter your password"
                            placeholderTextColor="#999"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />

                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Ionicons
                                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                                size={24}
                                color={colors.text}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('ForgotPassword')}
                            style={styles.forgotPassword}
                        >
                            <Text style={[styles.forgotText, { color: '#F75F5F' }]}>
                                ForgotPassword?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.rememberRow}>
                        <Text style={styles.rememberText}>Remember Me</Text>
                        <Switch
                            value={remember}
                            onValueChange={setRemember}
                            trackColor={{ false: '#ccc', true: '#34C759' }}
                            thumbColor="#fff"
                        />
                    </View>

                    <Text style={styles.footerAgreement}>
                        By connecting your account confirm that you agree with our
                        <Text style={styles.boldText}> Term and Condition</Text>
                    </Text>

                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.buttonLogin}>Đăng Nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
