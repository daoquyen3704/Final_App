// Nhập các thư viện cần thiết
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useKeyboard } from '@react-native-community/hooks';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../Screens/Homepage';
import CardScreen from '../Screens/User/Card';
import WishListScreen from '../Screens/Cart/WishList';
import CartScreen from '../Screens/Cart/Cart';

// Component Custom Tab Navigator
const TabNavigator = () => {
    const [activeTab, setActiveTab] = useState('Home'); // State để theo dõi tab đang chọn
    const keyboard = useKeyboard(); // Hook để kiểm tra trạng thái bàn phím

    // Hàm render màn hình dựa trên tab đang chọn
    const renderScreen = () => {
        switch (activeTab) {
            case 'Home':
                return <HomeScreen />;
            case 'Wishlist':
                return <WishListScreen />;
            case 'Cart':
                return <CartScreen />;
            case 'Card':
                return <CardScreen />;
            default:
                return <HomeScreen />;
        }
    };

    return (
        <View style={styles.container}>
            {/* Nội dung màn hình */}
            <View style={styles.screenContainer}>
                {renderScreen()}
            </View>

            {/* Thanh tab tùy chỉnh */}
            <View
                style={[
                    styles.tabBar,
                    { display: keyboard.keyboardShown ? 'none' : 'flex' }, // Ẩn tab bar khi bàn phím hiện
                ]}
            >
                {/* Tab Trang Chủ */}
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => setActiveTab('Home')}
                >
                    <Ionicons
                        name={activeTab === 'Home' ? 'home' : 'home-outline'}
                        size={24}
                        color={activeTab === 'Home' ? '#A17CF3' : '#aaa'}
                    />
                    {activeTab === 'Home' && (
                        <Text style={[styles.tabLabel, { color: '#A17CF3' }]}>Trang Chủ</Text>
                    )}
                </TouchableOpacity>

                {/* Tab Yêu Thích */}
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => setActiveTab('Wishlist')}
                >
                    <Ionicons
                        name={activeTab === 'Wishlist' ? 'heart' : 'heart-outline'}
                        size={24}
                        color={activeTab === 'Wishlist' ? '#A17CF3' : '#aaa'}
                    />
                    {activeTab === 'Wishlist' && (
                        <Text style={[styles.tabLabel, { color: '#A17CF3' }]}>Yêu Thích</Text>
                    )}
                </TouchableOpacity>

                {/* Tab Giỏ Hàng */}
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => setActiveTab('Cart')}
                >
                    <Ionicons
                        name={activeTab === 'Cart' ? 'bag' : 'bag-outline'}
                        size={24}
                        color={activeTab === 'Cart' ? '#A17CF3' : '#aaa'}
                    />
                    {activeTab === 'Cart' && (
                        <Text style={[styles.tabLabel, { color: '#A17CF3' }]}>Giỏ Hàng</Text>
                    )}
                </TouchableOpacity>

                {/* Tab Thẻ */}
                <TouchableOpacity
                    style={styles.tabItem}
                    onPress={() => setActiveTab('Card')}
                >
                    <Ionicons
                        name={activeTab === 'Card' ? 'card' : 'card-outline'}
                        size={24}
                        color={activeTab === 'Card' ? '#A17CF3' : '#aaa'}
                    />
                    {activeTab === 'Card' && (
                        <Text style={[styles.tabLabel, { color: '#A17CF3' }]}>Thẻ</Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
};

// Styles cho giao diện tab bar
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screenContainer: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderTopWidth: 0,
        height: 60,
        paddingBottom: 10,
        paddingTop: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        borderTopColor: '#eee',
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabLabel: {
        fontSize: 10,
        fontWeight: '500',
        marginTop: 2,
    },
});

// Xuất component
export default TabNavigator;