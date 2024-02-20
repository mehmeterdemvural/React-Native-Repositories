import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ProgressBar} from 'react-native-paper';
import Lottie from 'lottie-react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

import Button from '../../../../components/Button';
import {styles} from '../CompleteProfile.styles';

function ProfilePhoto({props}) {
  const manLottie = '../../../../assets/man.json';
  const womanLottie = '../../../../assets/woman.json';

  const [image, setImage] = useState(null);

  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.assets[0].uri};
        console.log('Source : ', source.uri);
        setImage(source.uri);
      }
    });
  };

  const submitProfilePhotoUri = () => {
    if (!image) {
      showMessage({
        message: 'Error!',
        description:
          'Profile photo is required. Please select your profile photo.',
        duration: 5000,
        color: '#E96479',
        backgroundColor: '#F5E9CF',
      });
    } else {
      props.updateProfileValues({
        profilePhotoUri: image,
      });
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.innerContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ProgressBar
        color={'#F0A04B'}
        animatedValue={props.index / (props.pages.length - 1)}
        style={styles.progress}
      />
      <View style={styles.lottieInnerContainer}>
        {image !== null ? (
          <Image
            source={{uri: image}}
            style={styles.imageBox}
            resizeMode={'center'}
          />
        ) : props.profileValues.gender == 'male' ? (
          <Lottie
            source={require(manLottie)}
            autoPlay
            loop
            style={styles.lottie}
          />
        ) : (
          <Lottie
            source={require(womanLottie)}
            autoPlay
            loop
            style={styles.lottie}
          />
        )}
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Profile Photo</Text>
        <Text style={styles.desc}>
          {'     '}You must have a profile photo to use the application.
          {'\n\n     '}Your profile photo will be public. We recommend that you
          choose a real photo of you as your profile photo.
        </Text>
      </View>

      <View style={styles.bodyContainer}>
        <TouchableOpacity
          style={styles.selectBirthdayButton}
          onPress={selectImage}>
          <Text style={styles.selectBirthdayButtonText}>
            Pick An Profile Photo
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            text={'Back'}
            handleSubmit={props.decreaseIndex}
            loading={false}
          />
        </View>
        <View style={styles.button}>
          <Button
            text={'Complete'}
            handleSubmit={submitProfilePhotoUri}
            loading={false}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default ProfilePhoto;
