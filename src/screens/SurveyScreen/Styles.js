import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeBackground: {
    display: "flex",
    justifyContent: "space-evenly",
    flex: 1,
    backgroundColor: '#fbfbfb'
  },
  questionIDText: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 20,
    color: '#000',
    fontSize: 30,
  }
});
