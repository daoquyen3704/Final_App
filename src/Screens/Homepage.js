import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import brandData from '../../assets/data/brand.json';
import productData from '../../assets/data/product.json';

const HomePage = () => {
    const navigation = useNavigation();
    const { colors } = useTheme();

    const [selectedBrand, setSelectedBrand] = useState(null);
    const [brands, setBrands] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        // Fix invalid brand logo URLs
        const cleanedBrands = brandData.map((b) => ({
            ...b,
            logo: b.logo.replace(/^hhttp/, 'http')
        }));
        setBrands(cleanedBrands);
        if (cleanedBrands.length > 0) {
            setSelectedBrand(cleanedBrands[0].name);
        }
    }, []);

    const filteredProducts = productData.filter((product) => {
        const matchBrand = (product.brand || '').toLowerCase() === (selectedBrand || '').toLowerCase();
        const matchSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
        return matchBrand && matchSearch;
    });

    const renderBrand = ({ item }) => {
        const isSelected = selectedBrand === item.name;
        return (
            <TouchableOpacity
                style={[
                    styles.brandContainer,
                    isSelected && styles.brandContainerSelected
                ]}
                onPress={() => setSelectedBrand(item.name)}
            >
                <View style={styles.brandLogoBg}>
                    <Image source={{ uri: item.logo }} style={styles.brandLogo} />
                </View>
                <Text style={[styles.brandName, { color: colors.text }]}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    const renderProduct = ({ item }) => (
        <TouchableOpacity
            style={styles.productCard}
            onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
            <View style={styles.productImageContainer}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <TouchableOpacity style={styles.favoriteIcon}>
                    <Ionicons name="heart-outline" size={18} color={colors.text} />
                </TouchableOpacity>
            </View>
            <Text style={[styles.productName, { color: colors.text }]} numberOfLines={2}>
                {item.name}
            </Text>
            <Text style={[styles.productPrice, { color: colors.text }]}>{item.price}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
            <FlatList
                data={filteredProducts}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={styles.productList}
                contentContainerStyle={{ paddingBottom: 20 }}
                ListHeaderComponent={
                    <>
                        {/* Header */}
                        <View style={styles.header}>
                            <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
                                <Ionicons name="menu" size={28} color={colors.text} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.bagButton} onPress={() => navigation.navigate('Cart')}>
                                <Ionicons name="bag-outline" size={24} color={colors.text} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.headerTextContainer}>
                            <Text style={[styles.greeting, { color: colors.text }]}>Hello</Text>
                            <Text style={[styles.welcomeMessage, { color: colors.text }]}>Welcome to Laza.</Text>
                        </View>

                        {/* Search */}
                        <View style={styles.searchContainer}>
                            <Ionicons name="search" size={20} color={colors.text + '80'} style={styles.searchIcon} />
                            <TextInput
                                value={searchText}
                                onChangeText={setSearchText}
                                style={[styles.searchInput, { color: colors.text, backgroundColor: colors.card }]}
                                placeholder="Search..."
                                placeholderTextColor={colors.text + '80'}
                            />
                            <TouchableOpacity style={[styles.micButton, { backgroundColor: colors.primary }]}>
                                <Ionicons name="mic" size={20} color="#fff" />
                            </TouchableOpacity>
                        </View>

                        {/* Brand List */}
                        <FlatList
                            data={brands}
                            renderItem={renderBrand}
                            keyExtractor={(item) => item.brand_id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.brandList}
                        />

                        {/* Section Title */}
                        <View style={styles.sectionHeader}>
                            <Text style={[styles.sectionTitle, { color: colors.text }]}>New Arrival</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('AllProduct')}>
                                <Text style={[styles.viewAll, { color: colors.text + 'A0' }]}>View All</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        marginHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
    },
    headerTextContainer: {
        marginBottom: 5,
    },
    greeting: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    welcomeMessage: {
        fontSize: 14,
    },
    menuButton: {
        padding: 5,
    },
    bagButton: {
        padding: 5,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    searchIcon: {
        position: 'absolute',
        left: 12,
        zIndex: 1,
    },
    searchInput: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        paddingLeft: 40,
        paddingRight: 60,
        fontSize: 16,
    },
    micButton: {
        position: 'absolute',
        right: 5,
        height: 40,
        width: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    brandList: {
        paddingVertical: 10,
    },
    brandContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 8,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    brandContainerSelected: {
        backgroundColor: '#e0e0e0',
        borderBottomWidth: 2,
        borderBottomColor: '#000',
    },
    brandLogoBg: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    brandLogo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    brandName: {
        fontSize: 14,
        fontWeight: '500',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '500',
    },
    viewAll: {
        fontSize: 14,
        fontWeight: '300',
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
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 5,
        borderRadius: 15,
    },
    productName: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default HomePage;
