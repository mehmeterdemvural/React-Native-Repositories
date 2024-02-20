import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: '#7DB9B6',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  inputContainer: {
    backgroundColor: '#F5E9CF',
    margin: 5,
    borderRadius: 10,
    maxHeight:150
  },
  textInput: {},
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#FCFFE7',
    borderRadius: 10,
  },
  buttonText: {padding: 10, color: '#4D455D', fontWeight: 'bold'},
});

export {styles};
