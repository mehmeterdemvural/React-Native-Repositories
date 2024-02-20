import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {padding: 5, marginTop: 2},
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
  },
  inputLabel: {color: '#4D455D', fontWeight: 'bold', fontSize: 15},
  yupMessage: {color: '#E96479', fontSize: 12},
  inputInnerContiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FCFFE7',
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: 5,
  },
  input: {flex: 1, color: '#4D455D', padding: 10, fontSize: 12},
});

export {styles};
