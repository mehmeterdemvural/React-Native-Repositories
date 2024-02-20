import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#F5E9CF',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 40,
    margin: 0,
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    padding: 5,
    flex: 1,
  },
  headerContainer: {marginVertical: 5},
  title: {fontSize: 20, fontWeight: 'bold', textAlign: 'center'},
  bodyContainer: {marginVertical: 10},
  label: {fontSize: 15, fontWeight: 'bold', margin: 5},
  input: {backgroundColor: '#FCFFE7', borderRadius: 5, padding: 5},
  selectImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginVertical: 5,
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
  usersListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupMemberContainer: {marginVertical: 20},
  usersPhotoContainer: {
    width: 30,
    height: 30,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameContainer: {
    flex: 1,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30,
  },
  checkboxContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  usersPhoto: {width: 25, height: 25, borderRadius: 13},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {flex: 1},
});

export {styles};
