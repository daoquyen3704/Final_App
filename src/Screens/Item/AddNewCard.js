import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/Item/AddNewCard';

const AddNewCard = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={24} color="#1D1E20" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Add New Card</Text>
                </View>

                {/* Payment Method Icons */}
                <View style={styles.iconRow}>
                    <TouchableOpacity style={styles.iconBoxActive}>
                        <Image
                            source={require('../../../assets/images/mastercard.png')}
                            style={styles.iconImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconBox}>
                        <Image
                            source={require('../../../assets/images/paypal.png')}
                            style={styles.iconImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconBox}>
                        <Image
                            source={require('../../../assets/images/bank.png')}
                            style={styles.iconImage}
                        />
                    </TouchableOpacity>
                </View>

                {/* Form Fields */}
                <View style={styles.form}>
                    <View>
                        <Text style={styles.label}>Card Owner</Text>
                        <TextInput style={styles.input} value="Min Raju" placeholderTextColor="#8F959E" />
                    </View>

                    <View>
                        <Text style={styles.label}>Card Number</Text>
                        <TextInput style={styles.input} value="5254 7634 8734 7690" placeholderTextColor="#8F959E" />
                    </View>

                    <View style={styles.row}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.label}>EXP</Text>
                            <TextInput style={styles.input} value="24/24" placeholderTextColor="#8F959E" />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.label}>CVV</Text>
                            <TextInput style={styles.input} value="7763" placeholderTextColor="#8F959E" />
                        </View>
                    </View>
                </View>

                {/* Add Card Button */}
                <TouchableOpacity style={styles.addBtn}>
                    <Text style={styles.addBtnText}>Add Card</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default AddNewCard;
