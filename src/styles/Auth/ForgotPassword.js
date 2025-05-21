import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 60, // Adjust as needed for SafeAreaView
        left: 20,
        zIndex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 80, // Adjust as needed
        marginBottom: 30,
    },
    image: {
        width: '65%', // Adjust size as needed // Adjust size as needed
        resizeMode: 'contain',
        marginBottom: 40,
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: 5,
        fontSize: 14,
        opacity: 0.7, // Match the design's muted look
    },
    input: {
        width: '100%',
        borderBottomWidth: 1, // Only bottom border as per design
        paddingVertical: 10,
        fontSize: 16,
        marginBottom: 30,
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: '58%',
        marginBottom: 'auto', // Push button to bottom
        opacity: 0.7,
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
