import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fbfbfb'
    },
    outcomeTextTitle: {
      fontSize: 30,
      color: '#333',
      textAlign: 'center',
      marginTop: 50,
    },
    outcomeText: {
      fontSize: 18,
      color: '#333',
      margin: 30,
      marginBottom: 25
    },
    outcomeTextBolded: {
      fontWeight: 'bold'
    },
    image: {
      width: 225,
      height: 225,
    },
    buttonContainer: {
      margin: 20
    },
    startOverButton: {
      backgroundColor: '#951CBA',
      paddingVertical: 9,
      paddingHorizontal: 25,
      borderRadius: 20,
      margin: 10
    },
    startOverButtonText: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center'
    },
  });
