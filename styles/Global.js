import { StyleSheet } from 'react-native';
  
const Global = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    containerStudent: {
        padding: 5,
        margin: 10
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },
    title: {
        fontSize: 20,
        fontWeight: 500,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    logo: {
        width: 66,
        height: 58,
      },
});

export default Global;