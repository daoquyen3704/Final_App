import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F2',
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1D1E20',
    },
    content: {
        flex: 1,
        padding: 16,
    },
    cartItem: {
        flexDirection: 'row',
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#FAFAFA',
        marginBottom: 16,
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 12,
    },
    productInfo: {
        flex: 1,
        justifyContent: 'space-between',
    },
    productHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4,
    },
    productName: {
        fontSize: 15,
        fontWeight: '500',
        color: '#1D1E20',
    },
    productBrand: {
        fontSize: 13,
        color: '#8F959E',
    },
    priceQuantityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 15,
        fontWeight: '500',
        color: '#1D1E20',
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F6FA',
        borderRadius: 20,
        padding: 4,
    },
    quantityButton: {
        padding: 4,
    },
    quantity: {
        paddingHorizontal: 12,
        fontSize: 14,
        fontWeight: '500',
    },
    addressSection: {
        marginBottom: 16,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: '500',
        color: '#1D1E20',
    },
    addressContent: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        padding: 16,
        borderRadius: 10,
    },
    address: {
        flex: 1,
        marginLeft: 12,
        fontSize: 15,
        color: '#1D1E20',
    },
    badge: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#E6F6EA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paymentSection: {
        marginBottom: 16,
    },
    paymentContent: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
        padding: 16,
        borderRadius: 10,
    },
    visaIcon: {
        width: 40,
        height: 24,
        marginRight: 12,
    },
    cardNumber: {
        flex: 1,
        fontSize: 15,
        color: '#1D1E20',
    },
    orderInfo: {
        marginBottom: 16,
    },
    orderInfoTitle: {
        fontSize: 17,
        fontWeight: '500',
        color: '#1D1E20',
        marginBottom: 16,
    },
    orderInfoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    orderInfoLabel: {
        fontSize: 15,
        color: '#8F959E',
    },
    orderInfoValue: {
        fontSize: 15,
        color: '#1D1E20',
    },
    totalRow: {
        marginTop: 8,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#F5F6FA',
    },
    totalLabel: {
        fontSize: 17,
        fontWeight: '500',
        color: '#1D1E20',
    },
    totalValue: {
        fontSize: 17,
        fontWeight: '500',
        color: '#1D1E20',
    },
    checkoutButton: {
        backgroundColor: '#9775FA',
        margin: 16,
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '500',
    },
});

export default styles;