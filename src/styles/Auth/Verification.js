import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,

    },
    backButton: {
        position: 'absolute',
        top: 60,
        left: 20,
        zIndex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 80,
        marginBottom: 30,
    },
    image: {
        width: '65%',
        resizeMode: 'contain',
        marginBottom: 40,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignSelf: 'center',
        marginBottom: 40,
    },
    otpInput: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    resendContainer: {
        marginBottom: 10,
        alignItems: 'center',
    },
    resendText: {
        marginTop: '60%',
        fontSize: 14,
        textAlign: 'center',
        opacity: 0.7,
    },
    resendLink: {
        fontWeight: 'bold',
        opacity: 1,
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: '#9775FA',
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});

export default styles;
