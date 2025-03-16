import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    safeBackground: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#fbfbfb'
    },
    accountButton: {
      position: 'absolute',
      top: 0,
      right: 0,
      margin: 25,
    },
    landingTitle: {
      fontSize: 23,
      color: '#333',
      textAlign: 'center',
      marginTop: 60,
    },
    logo: {
      width: 200,
      height: 200
    },
    landingText: {
      fontSize: 14.5,
      color: '#333',
      marginTop: 10,
      margin: 25,
      textAlign: 'center'
    },
    startButton: {
      backgroundColor: '#951CBA',
      paddingVertical: 9,
      width: '70%',
      borderRadius: 20
    },
    startButtonText: {
      fontSize: 20,
      color: '#fff',
      textAlign: 'center',
    },
  });
