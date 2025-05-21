// Nhập các thư viện cần thiết
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Switch,
    Image,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Biểu tượng từ Expo
import { useTheme } from '@react-navigation/native'; // Sử dụng theme từ react-navigation
import { useNavigation } from '@react-navigation/native'; // Điều hướng
import styles from '../../styles/Auth/SignUp'; // Nhập styles từ file riêng
import users from '../../../assets/data/user.json';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Hàm component chính cho màn hình đăng ký
export default function RegisterScreen() {
    const { colors } = useTheme(); // Lấy màu sắc từ theme
    const [username, setUsername] = useState(''); // State cho tên người dùng
    const [password, setPassword] = useState(''); // State cho mật khẩu
    const [email, setEmail] = useState(''); // State cho email
    const [remember, setRemember] = useState(true); // State cho tùy chọn "Ghi nhớ tôi"

    const isPasswordStrong = password.length >= 8; // Kiểm tra độ mạnh mật khẩu
    const navigation = useNavigation(); // Hook điều hướng
    const handleSignUp = async () => {
        if (!username || !password || !email) {
            alert('Vui lòng nhập đầy đủ thông tin');
            return;
        }

        // Kiểm tra trùng username
        const existed = users.find(u => u.username === username);
        if (existed) {
            alert('Tên người dùng đã tồn tại');
            return;
        }

        const newUser = {
            id: Date.now(),
            username,
            password,
            email,
            img: 'https://i.pravatar.cc/150?u=' + username,
        };

        // Lưu tạm user mới vào AsyncStorage
        await AsyncStorage.setItem('user', JSON.stringify(newUser));

        alert('Đăng ký thành công');
        navigation.navigate('Login');
    };

    return (
        // Container chính với tính năng tránh bàn phím
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            {/* Nút quay lại */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={24} color="#000" />
            </TouchableOpacity>

            {/* Tiêu đề */}
            <Text style={styles.title}>Sign Up</Text>

            {/* Khối form nhập liệu */}
            <View style={styles.formBlock}>
                {/* Trường nhập tên người dùng */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Username</Text>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            value={username}
                            onChangeText={setUsername}
                            placeholder="Enter your username"
                            placeholderTextColor="#999"
                        />
                        {username.length > 0 && (
                            <Ionicons name="checkmark" size={20} color="#34C759" />
                        )}
                    </View>
                </View>

                {/* Trường nhập mật khẩu */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Enter your password"
                            placeholderTextColor="#999"
                            secureTextEntry // Ẩn ký tự mật khẩu
                        />
                        {isPasswordStrong && (
                            <Text style={styles.strongText}>Mạnh</Text>
                        )}
                    </View>
                </View>

                {/* Trường nhập email */}
                <View style={styles.fieldContainer}>
                    <Text style={styles.label}>Email Address</Text>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Email"
                            placeholderTextColor="#999"
                            keyboardType="email-address" // Bàn phím dành cho email
                        />
                        {email.includes('@') && (
                            <Ionicons name="checkmark" size={20} color="#34C759" />
                        )}
                    </View>
                </View>

                {/* Tùy chọn "Ghi nhớ tôi" */}
                <View style={styles.rememberRow}>
                    <Text style={styles.rememberText}>Remember Me</Text>
                    <Switch
                        value={remember}
                        onValueChange={setRemember}
                        trackColor={{ false: '#ccc', true: '#34C759' }}
                        thumbColor="#fff"
                    />
                </View>
            </View>

            {/* Nút đăng ký */}
            <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
                <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}