import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    testButton: {
        position: 'absolute',
        top: 40,
        right: 16,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 8,
        borderRadius: 8,
        zIndex: 1,
    },
    testButtonText: {
        color: '#FFFFFF',
        fontSize: 12,
    },
    image: {
        width: width,
        height: height,
        resizeMode: 'contain',
    },
    contentCard: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        padding: 24,
        paddingTop: 32,
        marginHorizontal: 16,
        marginBottom: 24,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignSelf: 'center',
        width: '92%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: '700',
        color: '#1D1E20',
        textAlign: 'center',
        marginBottom: 8,
        lineHeight: 32,
    },
    description: {
        fontSize: 14,
        color: '#8F959E',
        textAlign: 'center',
        marginBottom: 28,
        lineHeight: 20,
        paddingHorizontal: 20,
    },
    genderButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 28,
    },
    genderButton: {
        paddingVertical: 14,
        paddingHorizontal: 48,
        borderRadius: 10,
        marginHorizontal: 8,
    },
    menButton: {
        backgroundColor: '#F5F6FA',
    },
    womenButton: {
        backgroundColor: '#8F52FE',
    },
    menButtonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#1D1E20',
    },
    womenButtonText: {
        fontSize: 15,
        fontWeight: '500',
        color: '#FFFFFF',
    },
    skipButton: {
        alignItems: 'center',
    },
    skipText: {
        fontSize: 15,
        color: '#C4C5C4',
    },
});

export default styles;
