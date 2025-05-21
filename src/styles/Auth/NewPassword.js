import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
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
        marginTop: 120,
        marginBottom: 100, // Increased margin
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: 5,
        fontSize: 14,
        opacity: 0.7,
    },
    space: {
        width: '100%',
        marginTop: "18%",
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        paddingVertical: 10,
        fontSize: 16,
        marginBottom: 30,
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 'auto',
        paddingHorizontal: 20,
        opacity: 0.7,
        marginTop: '58%',
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
        marginBottom: 20,
    },
});

export default styles;
