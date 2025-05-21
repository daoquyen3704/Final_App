import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 10,
        position: 'absolute',
        top: 40,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    headerButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 20,
        padding: 8,
    },
    imageCarousel: {
        height: width * 1.1,
    },
    productImage: {
        width: width,
        height: width * 1.1,
        resizeMode: 'cover',
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: 'white',
        marginTop: -20,
        minHeight: 400,
    },
    titlePriceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 4,
    },
    category: {
        fontSize: 14,
    },
    price: {
        fontSize: 14,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        flex: 1,
        marginRight: 10,
    },
    priceValue: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    sizeSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    sizeGuide: {
        fontSize: 14,
    },
    sizeList: {
        paddingBottom: 20,
    },
    sizeBox: {
        width: 60,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#eee',
    },
    sizeText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        marginTop: 5,
    },
    readMore: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 20,
    },
    reviewSectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    viewAll: {
        fontSize: 14,
    },
    reviewItem: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    reviewAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 15,
    },
    reviewContent: {
        flex: 1,
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 2,
    },
    reviewName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    reviewRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviewRatingText: {
        fontSize: 12,
    },
    reviewDate: {
        fontSize: 12,
        marginBottom: 5,
    },
    reviewComment: {
        fontSize: 14,
        lineHeight: 18,
    },
    footer: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: 'white',
    },
    addToCartButton: {
        backgroundColor: '#9775FA',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addToCartText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});

export default styles;