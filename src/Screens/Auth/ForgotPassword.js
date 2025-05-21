import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, Image, Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/Auth/ForgotPassword';
import users from '../../../assets/data/user.json'; // ✅ Import danh sách user

export default function ForgotPasswordScreen() {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const handleConfirmEmail = () => {
        const userFound = users.find(user => user.email === email.trim());

        if (userFound) {
            navigation.navigate('VerificationCode'); // ✅ Nếu đúng email -> tiếp tục
        } else {
            Alert.alert('Lỗi', 'Email không tồn tại trong hệ thống'); // ❌ Không đúng
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <Ionicons
                name="arrow-back"
                size={24}
                color={colors.text}
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            />

            <Text style={[styles.title, { color: colors.text }]}>Quên Mật Khẩu</Text>

            <Image
                source={require('../../../assets/images/placeholder.png')}
                style={[styles.image, { width: '100%' }]}
            />

            <Text style={[styles.label, { color: colors.text }]}>Địa chỉ Email</Text>
            <TextInput
                style={[styles.input, { color: colors.text, borderColor: colors.border }]}
                placeholder="bill.sanders@example.com"
                placeholderTextColor={colors.text}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={[styles.description, { color: colors.text }]}>
                Vui lòng nhập email của bạn để nhận mã xác nhận nhằm đặt lại mật khẩu.
            </Text>

            <TouchableOpacity onPress={handleConfirmEmail} style={{ width: '100%' }}>
                <Text style={styles.button}>Xác Nhận Email</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
