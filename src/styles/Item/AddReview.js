import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F2F2F2',
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1D1E20',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    inputContainer: {
        marginBottom: 24,
    },
    label: {
        fontSize: 17,
        fontWeight: '500',
        color: '#1D1E20',
        marginBottom: 12,
    },
    input: {
        backgroundColor: '#F5F6FA',
        borderRadius: 10,
        padding: 16,
        fontSize: 15,
        color: '#1D1E20',
    },
    experienceInput: {
        height: 120,
        textAlignVertical: 'top',
    },
    sliderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    slider: {
        flex: 1,
        marginHorizontal: 12,
        height: 40,
    },
    sliderValue: {
        fontSize: 14,
        color: '#1D1E20',
        fontWeight: '500',
    },
    submitButton: {
        backgroundColor: '#9775FA',
        margin: 20,
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '500',
    },
});

export default styles;