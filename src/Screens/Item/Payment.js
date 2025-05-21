import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../../styles/Item/Payment';

const PaymentScreen = () => {
    const navigation = useNavigation();
    const [isSaveCard, setSaveCard] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="#1D1E20" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Payment</Text>
                </View>

                {/* Card Display */}
                <LinearGradient
                    colors={['#FFA500', '#FF3D00', '#A259FF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.card}
                >
                    <Text style={styles.visaText}>VISA</Text>
                    <View>
                        <Text style={styles.cardOwner}>Mrh Raju</Text>
                        <Text style={styles.cardType}>Visa Classic</Text>
                    </View>
                    <Text style={styles.cardNumber}>5 2 5 4   • • • •   • • • •   7 6 9 0</Text>
                    <Text style={styles.cardBalance}>$3,763.87</Text>
                </LinearGradient>

                {/* Add New Card Button */}
                <TouchableOpacity
                    style={styles.addCardBtn}
                    onPress={() => navigation.navigate('AddNewCard')}
                >
                    <Ionicons name="add" size={20} color="#7F3DFF" />
                    <Text style={styles.addCardText}>Add new card</Text>
                </TouchableOpacity>

                {/* Card Details Form */}
                <View style={styles.form}>
                    <View>
                        <Text style={styles.label}>Card Owner</Text>
                        <TextInput style={styles.input} value="Mrh Raju" />
                    </View>

                    <View>
                        <Text style={styles.label}>Card Number</Text>
                        <TextInput style={styles.input} value="5254 7634 8734 7690" />
                    </View>

                    <View style={styles.row}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.label}>EXP</Text>
                            <TextInput style={styles.input} value="24/24" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.label}>CVV</Text>
                            <TextInput style={styles.input} value="7763" />
                        </View>
                    </View>
                </View>

                {/* Save Card Switch */}
                <View style={styles.switchContainer}>
                    <Text style={styles.switchLabel}>Save card info</Text>
                    <Switch
                        value={isSaveCard}
                        onValueChange={setSaveCard}
                        trackColor={{ false: '#E7E8EA', true: '#34C759' }}
                        thumbColor="#FFFFFF"
                    />
                </View>

                {/* Save Card Button */}
                <TouchableOpacity style={styles.saveBtn}>
                    <Text style={styles.saveBtnText}>Save Card</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default PaymentScreen;
