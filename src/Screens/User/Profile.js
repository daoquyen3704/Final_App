import React, { useState, useEffect } from 'react'; // Thêm useEffect vào imports
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../../AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({ navigation }) => {
    const { user, setUser } = useAuth();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const savedUser = await AsyncStorage.getItem('loggedInUser');
                if (savedUser) {
                    const parsedUser = JSON.parse(savedUser);
                    console.log('Saved user data:', parsedUser); // For debugging
                    setUserData(parsedUser);
                }
            } catch (error) {
                console.log('Error getting user data:', error);
            }
        };
        getUserData();
    }, []);

    const menuItems = [
        {
            icon: 'person-outline',
            label: 'Edit Profile',
            screen: 'EditProfile',
        },
        {
            icon: 'cart-outline',
            label: 'My Orders',
            screen: 'Orders',
        },
        {
            icon: 'card-outline',
            label: 'Payment Method',
            screen: 'Payment',
        },
        {
            icon: 'location-outline',
            label: 'Shipping Address',
            screen: 'Address',
        },
        {
            icon: 'heart-outline',
            label: 'My Wishlist',
            screen: 'WishList',
        },
        {
            icon: 'settings-outline',
            label: 'Settings',
            screen: 'Settings',
        },
    ];

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('loggedInUser'); // Xóa thông tin đăng nhập
            setUser(null); // Xóa user trong context
            navigation.replace('Login'); // Chuyển về màn Login
        } catch (error) {
            console.log('Error logging out:', error);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.profileHeader}>
                <Image
                    source={{
                        uri: userData?.img || 'https://i.pravatar.cc/150?img=1'
                    }}
                    style={styles.avatar}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{userData?.username || 'Guest'}</Text>
                    <Text style={styles.email}>{userData?.email || 'guest@example.com'}</Text>
                    <View style={styles.verifiedBadge}>
                        <Text style={styles.verifiedText}>Đã Xác Minh</Text>
                        <View style={styles.verifiedDot} />
                    </View>
                </View>
            </View>

            <View style={styles.menuContainer}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.menuItem}
                        onPress={() => navigation.navigate(item.screen)}
                    >
                        <View style={styles.menuItemLeft}>
                            <Ionicons name={item.icon} size={24} color="#1D1E20" />
                            <Text style={styles.menuItemText}>{item.label}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color="#8F959E" />
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
            >
                <Ionicons name="log-out-outline" size={24} color="#FF5757" />
                <Text style={styles.logoutText}>Đăng Xuất</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    profileHeader: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#F5F6FA',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 15,
    },
    profileInfo: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1D1E20',
    },
    email: {
        fontSize: 14,
        color: '#8F959E',
        marginTop: 5,
    },
    verifiedBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    verifiedText: {
        fontSize: 12,
        color: '#34C759',
        marginRight: 5,
    },
    verifiedDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#34C759',
    },
    menuContainer: {
        marginTop: 20,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#F5F6FA',
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuItemText: {
        fontSize: 16,
        color: '#1D1E20',
        marginLeft: 15,
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    logoutText: {
        fontSize: 16,
        color: '#FF5757',
        marginLeft: 15,
    },
});

export default Profile;