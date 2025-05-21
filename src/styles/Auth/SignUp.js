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
    title: {
        fontSize: 28,
        fontWeight: '600',
        color: '#1D1E20',
        marginTop: 60,
        fontFamily: "Inter",
        lineHeight: 110.00000000000001,
        textAlign: 'center',
    },
    formBlock: {
        marginBottom: 30,
        marginTop: 80,
    },
    fieldContainer: {
        marginBottom: 20,

    },
    label: {
        color: '#999',
        fontSize: 14,
        marginBottom: 6,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#E5E5E5',
        borderBottomWidth: 1,
        paddingVertical: 6,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 6,
        color: '#000',
    },
    strongText: {
        fontSize: 12,
        color: 'green',
    },
    rememberRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    rememberText: {
        fontSize: 16,
        color: '#000',
    },
    signupButton: {
        backgroundColor: '#9775FA',
        paddingVertical: 16,
        borderRadius: 8,
        alignItems: 'center',

        marginTop: 'auto',
        marginBottom: 24,
    },
    signupText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
});
export default styles;
