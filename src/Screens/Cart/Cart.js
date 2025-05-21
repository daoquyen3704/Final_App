import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/Cart/Cart';

const initialCartItems = [
    {
        id: '1',
        name: "Men's Tie-Dye T-shirt",
        brand: 'Nike Sportswear',
        price: 45.00,
        image: require('../../../assets/images/product1.png'),
        quantity: 1
    },
    {
        id: '2',
        name: "Men's Tie-Dye T-shirt",
        brand: 'Nike Sportswear',
        price: 45.00,
        image: require('../../../assets/images/product2.png'),
        quantity: 1
    }
];

const CartScreen = () => {
    const navigation = useNavigation();
    const [cartItems, setCartItems] = useState(initialCartItems);

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingCost = 10;
    const total = subtotal + shippingCost;

    const handleDeleteItem = (itemId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    };

    const handleUpdateQuantity = (itemId, increment) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId
                    ? { ...item, quantity: increment ? item.quantity + 1 : Math.max(1, item.quantity - 1) }
                    : item
            )
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#1D1E20" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Cart</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView style={styles.content}>
                {cartItems.map((item) => (
                    <View key={item.id} style={styles.cartItem}>
                        <Image source={item.image} style={styles.productImage} />
                        <View style={styles.productInfo}>
                            <View style={styles.productHeader}>
                                <Text style={styles.productName}>{item.name}</Text>
                                <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
                                    <Ionicons name="trash-outline" size={24} color="#FF5757" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.productBrand}>{item.brand}</Text>
                            <View style={styles.priceQuantityContainer}>
                                <Text style={styles.price}>${(item.price * item.quantity).toFixed(2)}</Text>
                                <View style={styles.quantityControls}>
                                    <TouchableOpacity
                                        style={styles.quantityButton}
                                        onPress={() => handleUpdateQuantity(item.id, false)}
                                    >
                                        <Ionicons name="remove" size={20} color="#1D1E20" />
                                    </TouchableOpacity>
                                    <Text style={styles.quantity}>{item.quantity}</Text>
                                    <TouchableOpacity
                                        style={styles.quantityButton}
                                        onPress={() => handleUpdateQuantity(item.id, true)}
                                    >
                                        <Ionicons name="add" size={20} color="#1D1E20" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}

                <TouchableOpacity
                    style={styles.addressSection}
                    onPress={() => navigation.navigate('Address')} // Add this line
                >
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Delivery Address</Text>
                        <Ionicons name="chevron-forward" size={24} color="#1D1E20" />
                    </View>
                    <View style={styles.addressContent}>
                        <Ionicons name="location-outline" size={24} color="#FF5757" />
                        <Text style={styles.address}>Chhatak, Sunamgonj 12/8AB</Text>
                        <View style={styles.badge}>
                            <Ionicons name="checkmark" size={16} color="#34C559" />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.paymentSection}
                    onPress={() => navigation.navigate('Payment')} // Add this line
                >
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Payment Method</Text>
                        <Ionicons name="chevron-forward" size={24} color="#1D1E20" />
                    </View>
                    <View style={styles.paymentContent}>
                        <Image source={require('../../../assets/images/visa.png')} style={styles.visaIcon} />
                        <Text style={styles.cardNumber}>Visa Classic</Text>
                        <View style={styles.badge}>
                            <Ionicons name="checkmark" size={16} color="#34C559" />
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.orderInfo}>
                    <Text style={styles.orderInfoTitle}>Order Info</Text>
                    <View style={styles.orderInfoRow}>
                        <Text style={styles.orderInfoLabel}>Subtotal</Text>
                        <Text style={styles.orderInfoValue}>${subtotal.toFixed(2)}</Text>
                    </View>
                    <View style={styles.orderInfoRow}>
                        <Text style={styles.orderInfoLabel}>Shipping cost</Text>
                        <Text style={styles.orderInfoValue}>${shippingCost.toFixed(2)}</Text>
                    </View>
                    <View style={[styles.orderInfoRow, styles.totalRow]}>
                        <Text style={styles.totalLabel}>Total</Text>
                        <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('CheckOutSuccess')}>
                <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default CartScreen;
