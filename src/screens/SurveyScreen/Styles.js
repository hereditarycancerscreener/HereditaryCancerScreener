import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeBackground: {
    flex: 1,
    marginTop: '30%',
  },
  navButtonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
    marginBottom: 120,
    width: 55,
    height: 55,
    borderRadius: 100,
    backgroundColor: '#A11CB5',
  },
  questionIDText: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 20,
    color: '#000',
    fontSize: 50,
  }
});