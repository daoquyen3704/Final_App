import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '600',
    },
    card: {
        height: 180,
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        justifyContent: 'space-between',
    },
    visaText: {
        position: 'absolute',
        top: 20,
        right: 20,
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardOwner: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '600',
    },
    cardType: {
        color: '#FFF',
        fontSize: 12,
        marginTop: 5,
    },
    cardNumber: {
        color: '#FFF',
        fontSize: 16,
        letterSpacing: 2,
    },
    cardBalance: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    addCardBtn: {
        height: 50,
        borderWidth: 1,
        borderColor: '#E7E8EA',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    addCardText: {
        color: '#7F3DFF',
        marginLeft: 10,
    },
    form: {
        gap: 20,
    },
    label: {
        marginBottom: 18,
        color: '#1D1E20',
        fontWeight: '500',
    },
    input: {
        height: 50,
        backgroundColor: '#F5F6FA',
        borderRadius: 10,
        paddingHorizontal: 15,
        color: '#1D1E20',
    },
    row: {
        flexDirection: 'row',
        gap: 15,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },
    switchLabel: {
        color: '#1D1E20',
    },
    saveBtn: {
        height: 50,
        backgroundColor: '#9775FA',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    saveBtnText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});
