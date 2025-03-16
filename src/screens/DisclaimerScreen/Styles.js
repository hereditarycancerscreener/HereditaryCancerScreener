import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeBackground: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fbfbfb'
    },
    disclaimerTitle: {
      fontSize: 23,
      color: '#333',
      textAlign: 'center',
      marginTop: 50,
      marginBottom: 20
    },
    disclaimerText: {
      fontSize: 14.5,
      color: '#333',
      marginLeft: 30,
      marginRight: 30
    },
    agreeButton: {
      backgroundColor: '#951CBA',
      paddingVertical: 9,
      marginBottom: 30,
      width: '70%',
      // paddingHorizontal: 15,
      borderRadius: 20
    },
    agreeButtonText: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
    },
  });
