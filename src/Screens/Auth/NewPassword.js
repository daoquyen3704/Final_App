// Nhập các thư viện cần thiết
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import styles from '../../styles/Auth/NewPassword'; // Nhập styles từ file riêng

// Hàm component chính cho màn hình đặt lại mật khẩu
const NewPasswordScreen = () => {
    const { colors } = useTheme(); // Lấy màu sắc từ theme
    const navigation = useNavigation(); // Hook điều hướng
    const [password, setPassword] = useState(''); // State cho mật khẩu mới
    const [confirmPassword, setConfirmPassword] = useState(''); // State cho xác nhận mật khẩu

    // Hàm xử lý đặt lại mật khẩu
    const handleResetPassword = () => {
        if (!password || !confirmPassword) {
            Alert.alert('Lỗi', 'Vui lòng nhập và xác nhận mật khẩu mới.');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Lỗi', 'Mật khẩu không khớp.');
            return;
        }
        // Thêm logic để đặt lại mật khẩu (ví dụ: gọi API)
        console.log('Đang đặt lại mật khẩu...');
        Alert.alert('Thành công', 'Mật khẩu đã được đặt lại thành công!', [
            { text: 'OK', onPress: () => navigation.navigate('Login') } // Chuyển đến màn hình đăng nhập
        ]);
    };

    return (
        // Container chính với SafeAreaView để xử lý vùng an toàn
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            {/* Nút quay lại */}
            <Ionicons
                name="arrow-back"
                size={24}
                color={colors.text}
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            />

            {/* Tiêu đề */}
            <Text style={[styles.title, { color: colors.text }]}>Mật Khẩu Mới</Text>

            {/* Trường nhập mật khẩu */}
            <View style={styles.space}>
                <Text style={[styles.label, { color: colors.text }]}>Mật khẩu</Text>
                <TextInput
                    style={[styles.input, { color: colors.text, borderColor: colors.border }]}
                    placeholder="Nhập mật khẩu mới"
                    placeholderTextColor="#999"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                {/* Trường xác nhận mật khẩu */}
                <Text style={[styles.label, { color: colors.text }]}>Xác nhận mật khẩu</Text>
                <TextInput
                    style={[styles.input, { color: colors.text, borderColor: colors.border }]}
                    placeholder="Xác nhận mật khẩu mới"
                    placeholderTextColor="#999"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </View>

            {/* Mô tả */}
            <Text style={[styles.description, { color: colors.text }]}>
                Vui lòng nhập mật khẩu mới của bạn.
            </Text>

            {/* Nút đặt lại mật khẩu */}
            <TouchableOpacity onPress={handleResetPassword} style={{ width: '100%' }}>
                <Text style={styles.button}>Đặt Lại Mật Khẩu</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

// Xuất component
export default NewPasswordScreen;