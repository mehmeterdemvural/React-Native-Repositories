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
  headerContainer: {marginVertical: 5},
  title: {fontSize: 20, fontWeight: 'bold', textAlign: 'center'},
  usersListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    marginVertical: 5
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
  buttonContainer: {flexDirection: 'row'},
  button: {flex: 1},
});

export {styles};
