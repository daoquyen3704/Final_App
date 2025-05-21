import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F2',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: '600',
        color: '#1D1E20',
    },
    subHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    reviewCount: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1D1E20',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    reviewRating: {
        fontSize: 14,
        fontWeight: '500',
        marginRight: 4,
        color: '#1D1E20',
    },
    addReviewButton: {
        flexDirection: 'row',
        backgroundColor: '#FF7043',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    addReviewText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
        marginLeft: 6,
    },
    reviewsList: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 24,
    },
    reviewItem: {
        flexDirection: 'row',
        marginBottom: 24,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
    },
    reviewContent: {
        flex: 1,
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reviewerName: {
        fontSize: 15,
        fontWeight: '500',
        color: '#1D1E20',
    },
    reviewDate: {
        fontSize: 13,
        color: '#8F959E',
        marginVertical: 4,
    },
    reviewText: {
        fontSize: 14,
        color: '#8F959E',
        lineHeight: 20,
    },
});

export default styles;