import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1D1E20',
    },
    subHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    itemCount: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1D1E20',
    },
    availability: {
        fontSize: 14,
        color: '#8F959E',
        marginLeft: 5,
        flex: 1,
    },
    editButton: {
        fontSize: 14,
        color: '#7F3DFF',
        fontWeight: '500',
    },
    productRow: {
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    productCard: {
        width: '48%',
        backgroundColor: '#FAFAFA',
        borderRadius: 15,
        padding: 12,
    },
    favoriteButton: {
        position: 'absolute',
        right: 12,
        top: 12,
        zIndex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 6,
    },
    productImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    productName: {
        fontSize: 14,
        color: '#1D1E20',
        marginTop: 10,
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1D1E20',
    },
});

export default styles;