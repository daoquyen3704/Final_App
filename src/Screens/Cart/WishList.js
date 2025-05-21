import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles/Cart/WishList';

const WishListScreen = () => {
    const navigation = useNavigation();

    const products = [
        {
            id: '1',
            name: 'Nike Sportswear Club Fleece',
            price: '$99',
            image: require('../../../assets/images/nike1.png')
        },
        {
            id: '2',
            name: 'Trail Running Jacket Nike Windrunner',
            price: '$99',
            image: require('../../../assets/images/nike2.png')
        },
        {
            id: '3',
            name: 'Training Top Nike Sport Clash',
            price: '$99',
            image: require('../../../assets/images/nike3.png')
        },
        {
            id: '4',
            name: 'Trail Running Jacket Nike Windrunner',
            price: '$99',
            image: require('../../../assets/images/nike4.png')
        },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
            <TouchableOpacity style={styles.favoriteButton}>
                <Ionicons name="heart" size={20} color="#FF5757" />
            </TouchableOpacity>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color="#1D1E20" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Wishlist</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Ionicons name="bag-outline" size={24} color="#1D1E20" />
                </TouchableOpacity>
            </View>

            <View style={styles.subHeader}>
                <Text style={styles.itemCount}>365 Items</Text>
                <Text style={styles.availability}>in wishlist</Text>
                <TouchableOpacity>
                    <Text style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.productRow}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default WishListScreen;