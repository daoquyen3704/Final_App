import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    content: {
        flex: 1,
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
    iconRow: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 40,
    },
    iconBoxActive: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FFF0E6',
    },
    iconBox: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#F5F6FA',
    },
    iconImage: {
        width: 80,
        height: 30,
    },
    form: {
        gap: 20,
    },
    label: {
        marginBottom: 10,
        color: '#1D1E20',
    },
    input: {
        height: 60,
        backgroundColor: '#F5F6FA',
        borderRadius: 10,
        paddingHorizontal: 15,
    },
    row: {
        flexDirection: 'row',
        gap: 15,
    },
    addBtn: {
        height: 50,
        backgroundColor: '#7F3DFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    addBtnText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
});
