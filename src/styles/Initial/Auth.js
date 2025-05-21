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
        marginTop: 100,
        fontFamily: "Inter",
        lineHeight: 110.00000000000001,
        textAlign: 'center',
    },
    socialButtons: {
        gap: 16,
        marginBottom: 32,
        marginTop: 100,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    facebookButton: {
        backgroundColor: '#4267B2',
    },
    twitterButton: {
        backgroundColor: '#1DA1F2',
    },
    googleButton: {
        backgroundColor: '#EA4335',
    },
    socialIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
    socialButtonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 24,
    },
    footerText: {
        fontSize: 15,
        color: '#8F959E',
        marginRight: 4,
    },
    signInText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#1D1E20',
    },
    createAccountButton: {
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
