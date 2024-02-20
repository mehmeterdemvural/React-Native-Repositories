import database from '@react-native-firebase/database';

const getUserName = async id => {
  let result;
  await database()
    .ref(`/users/${id}`)
    .once(
      'value',
      snapshot =>
        (result = `${snapshot.val().firstName} ${snapshot.val().lastName}`),
    );
  return result;
};
export default getUserName;
