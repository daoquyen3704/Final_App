import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 15,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 5,
    },
    menuButton: {
        padding: 5,
    },
    headerTextContainer: {
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    greeting: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    welcomeMessage: {
        fontSize: 15,
        color: '#8F959E',
        marginBottom: 10,
    },
    bagButton: {
        padding: 5,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25,

    },
    searchInput: {
        flex: 1,
        height: 50,
        borderRadius: 10,
        paddingLeft: 40,
        paddingRight: 60,
        fontSize: 16,
        backgroundColor: '#F5F6FA',
    },
    searchIcon: {
        position: 'absolute',
        left: 12,
        zIndex: 1,
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
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewAll: {
        fontSize: 14,
    },
    brandList: {
        paddingVertical: 10,
    },
    brandContainer: {
        flexDirection: 'row', // Để logo và tên hiển thị trên một hàng
        alignItems: 'center', // Căn chỉnh logo và tên ở giữa theo chiều dọc
        marginRight: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    // code change
    brandContainerSelected: {
        borderBottomWidth: 2,
        borderBottomColor: '#000',
        backgroundColor: '#e0e0e0',
    },

    brandLogoBg: {
        width: 30, // Giảm kích thước logo để phù hợp
        height: 30,
        borderRadius: 15, // Đảm bảo logo tròn
        backgroundColor: '#f5f5f5', // Màu nền cho logo
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10, // Khoảng cách giữa logo và tên
    },
    brandLogo: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain', // Giữ tỷ lệ khung hình của logo
    },
    brandName: {
        fontSize: 14, // Kích thước chữ
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
        width: '100%',
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

export default styles;
