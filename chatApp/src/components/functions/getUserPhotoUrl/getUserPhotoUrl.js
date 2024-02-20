import database from '@react-native-firebase/database';

const getUserPhotoUrl = async id => {
  let result;
  await database()
    .ref(`/users/${id}`)
    .once('value', snapshot => (result = snapshot.val().profilePhotoURL));
  return result;
};
export default getUserPhotoUrl;
