import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme, useNavigation } from '@react-navigation/native';

import productData from '../../../assets/data/product.json';

const AllProduct = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const [products, setProducts] = useState(productData);
    const [sortAscending, setSortAscending] = useState(true);

    const toggleSort = () => {
        const sorted = [...products].sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, '')) || 0;
            const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, '')) || 0;
            return sortAscending ? priceA - priceB : priceB - priceA;
        });
        setProducts(sorted);
        setSortAscending(!sortAscending);
    };

    const renderProduct = ({ item }) => (
        <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
            <View style={styles.productImageContainer}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <TouchableOpacity style={styles.favoriteIcon}>
                    <Ionicons name="heart-outline" size={18} color="#333" />
                </TouchableOpacity>
            </View>
            <Text style={[styles.productName, { color: colors.text }]} numberOfLines={2}>
                {item.name}
            </Text>
            <Text style={[styles.productPrice, { color: colors.text }]}>{item.price}</Text>
            <Text style={[styles.productAvailable, { color: colors.text + '99' }]}>
                Available: {item.available || 0}
            </Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={colors.text} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: colors.text }]}>All Products ({products.length})</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Ionicons name="bag-outline" size={24} color={colors.text} />
                </TouchableOpacity>
            </View>

            <View style={styles.sortContainer}>
                <Text style={{ color: colors.text }}>Sort by:</Text>
                <TouchableOpacity onPress={toggleSort} style={styles.sortButton}>
                    <Ionicons name={sortAscending ? 'arrow-down' : 'arrow-up'} size={18} color={colors.primary} />
                    <Text style={[styles.sortText, { color: colors.primary }]}>
                        Price {sortAscending ? 'Asc' : 'Desc'}
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={styles.productList}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    sortContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'flex-end',
        gap: 10,
    },
    sortButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sortText: {
        marginLeft: 5,
        fontSize: 14,
        fontWeight: '500',
    },
    productList: {
        justifyContent: 'space-between',
    },
    productCard: {
        width: '48%',
        marginBottom: 20,
    },
    productImageContainer: {
        aspectRatio: 0.8,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        marginBottom: 10,
        position: 'relative',
        overflow: 'hidden',
    },
    productImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    favoriteIcon: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 5,
        borderRadius: 15,
    },
    productName: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 2,
        paddingHorizontal: 4,
    },
    productPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingHorizontal: 4,
    },
    productAvailable: {
        fontSize: 12,
        fontWeight: '400',
        paddingHorizontal: 4,
        marginTop: 2,
    },
});

export default AllProduct;
