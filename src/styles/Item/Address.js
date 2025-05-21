import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
        padding: 16,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 17,
        fontWeight: '500',
        color: '#1D1E20',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#F5F6FA',
        borderRadius: 10,
        padding: 16,
        fontSize: 15,
        color: '#1D1E20',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },
    switchLabel: {
        fontSize: 15,
        color: '#1D1E20',
    },
    saveButton: {
        backgroundColor: '#9775FA',
        margin: 16,
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
    },
    saveButtonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '500',
    },
});

export default styles;