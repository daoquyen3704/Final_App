import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    backButton: {
        position: 'absolute',
        top: 45,
        left: 20,
        width: 45,
        height: 45,
        borderRadius: 12,
        backgroundColor: '#F5F6FA',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    backIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    content: {
        marginTop: 120,
    },
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: '#1D1E20',
        marginBottom: 8,
        fontFamily: 'Inter',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        color: '#8F959E',
        fontFamily: 'Inter',
        marginBottom: 32,
        textAlign: 'center',
    },
    formWrapper: {
        marginTop: 60,
    },
    inputWrapper: {
        position: 'relative',
        marginBottom: 16,
    },
    input: {
        height: 56,
        borderBottomWidth: 1,
        borderColor: '#E5E5E5',
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 10,
    },
    eyeIcon: {
        position: 'absolute',
        right: 16,
        top: 50,
    },
    label: {
        marginHorizontal: 16,
        color: '#999',
        fontSize: 14,
        marginBottom: 6,
    },
    forgotPassword: {
        position: 'absolute',
        right: 0,
        bottom: -22,
    },
    buttonLogin: {
        backgroundColor: '#9775FA',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
        marginTop: 24,
    },
    forgotText: {
        fontSize: 13,
    },
    rememberRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
        marginTop: 40,
    },
    rememberText: {
        fontSize: 16,
        color: '#000',
    },
    loginButton: {
        backgroundColor: '#9775FA',
        borderRadius: 12,
        marginBottom: 24,
    },
    loginText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    footerAgreement: {
        marginTop: '20%',
        textAlign: 'center',
        color: '#8F959E',
        fontSize: 13,
        marginBottom: 16,
    },
    boldText: {
        fontWeight: '600',
        color: '#1D1E20',
    },
});

export default styles;