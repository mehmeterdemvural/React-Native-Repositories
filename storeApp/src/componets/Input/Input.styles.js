import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {margin: 5},
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  label: {color: '#DC8449', fontWeight: 'bold', marginBottom: 0},
  alertText: {
    color: 'red',
    textAlign: 'right',
  },
  textInputContainer: {flexDirection: 'row', backgroundColor: '#4E6E81', alignItems: 'center',     borderRadius: 5,},
  textInput: {
    color: 'white',
    height: 30,
    fontSize: 12,
    padding: 5,
    flex:1
  },
  icon:{paddingLeft: 5, width:25},
  buttonContainer: {
    backgroundColor: '#4E6E81',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 25,
    height:40, justifyContent: 'center'
  },
  buttonText: {color: '#DC8449', fontWeight: 'bold', fontSize: 25},
});

export {styles};
