import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#F5E9CF',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 50,
    margin: 0,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    padding: 5,
    flex: 1,
  },
  title: {fontSize: 20, fontWeight: 'bold', textAlign: 'center'},
  bodyContainer: {marginVertical: 10, height: 450},
  label: {fontSize: 15, fontWeight: 'bold', margin: 5},
  input: {backgroundColor: '#FCFFE7', borderRadius: 5, padding: 5},
  selectImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  selectImageText: {
    backgroundColor: '#FCFFE7',
    padding: 5,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 15,
    marginHorizontal: 60,
    textAlign: 'center',
  },
  checkedboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {flexDirection: 'row'},
  button: {flex: 1},
});

export {styles};
