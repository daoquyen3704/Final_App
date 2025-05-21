import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    Pressable,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../styles/Auth/Verification';

const VerificationCodeScreen = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const [code, setCode] = useState(['', '', '', '']);
    const [timer, setTimer] = useState(20);
    const [canResend, setCanResend] = useState(false);
    const inputRefs = useRef([]);

    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else {
            setCanResend(true);
        }
    }, [timer]);

    const handleResendCode = () => {
        if (!canResend) return;
        setTimer(20);
        setCanResend(false);
        setCode(['', '', '', '']);
        inputRefs.current[0]?.focus();
    };

    const handleInputChange = (text, index) => {
        const newCode = [...code];

        // Nếu dán toàn bộ mã
        if (text.length === 4) {
            const split = text.split('').slice(0, 4);
            setCode(split);
            inputRefs.current[3]?.blur();
            return;
        }

        newCode[index] = text;
        setCode(newCode);

        if (text && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }

        // Tự động submit nếu đủ 4 số
        if (newCode.every((c) => c !== '')) {
            // Gửi mã xác nhận ở đây nếu cần
            console.log('Submitted code:', newCode.join(''));
        }
    };

    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && code[index] === '' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
                    <View style={{ flex: 1, justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'center' }}>
                            <Ionicons
                                name="arrow-back"
                                size={24}
                                color={colors.text}
                                style={styles.backButton}
                                onPress={() => navigation.goBack()}
                            />

                            <Text style={[styles.title, { color: colors.text }]}>Verification Code</Text>

                            <Image source={require('../../../assets/images/placeholder.png')} style={[styles.image, { width: '100%' }]} />

                            <View style={styles.otpContainer}>
                                {code.map((digit, index) => (
                                    <TextInput
                                        key={index}
                                        ref={(ref) => (inputRefs.current[index] = ref)}
                                        style={[
                                            styles.otpInput,
                                            {
                                                color: colors.text,
                                                borderColor: colors.border,
                                                backgroundColor: colors.card,
                                            },
                                        ]}
                                        value={digit}
                                        onChangeText={(text) => handleInputChange(text.slice(-1), index)}
                                        onKeyPress={(e) => handleKeyPress(e, index)}
                                        keyboardType="number-pad"
                                        maxLength={1}
                                        textAlign="center"
                                        selectTextOnFocus
                                    />
                                ))}
                            </View>

                            <View style={styles.resendContainer}>
                                {timer > 0 ? (
                                    <Text style={[styles.resendText, { color: colors.text }]}>
                                        {String(Math.floor(timer / 60)).padStart(2, '0')}:{String(timer % 60).padStart(2, '0')} resend confirmation code.
                                    </Text>
                                ) : (
                                    <Pressable onPress={handleResendCode}>
                                        <Text style={[styles.resendText, styles.resendLink, { color: colors.primary }]}>
                                            Resend confirmation code.
                                        </Text>
                                    </Pressable>
                                )}
                            </View>
                        </View>

                        <View style={{ paddingBottom: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('NewPassword')}>
                                <Text style={styles.button}>Confirm Code</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default VerificationCodeScreen;
