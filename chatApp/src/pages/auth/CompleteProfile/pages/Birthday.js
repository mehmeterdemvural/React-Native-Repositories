import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ProgressBar} from 'react-native-paper';
import {DatePickerModal} from 'react-native-paper-dates';
import {showMessage} from 'react-native-flash-message';
import Lottie from 'lottie-react-native';

import Button from '../../../../components/Button';
import {styles} from '../CompleteProfile.styles';

function Birthday({props}) {
  const [birthday, setBirthday] = useState(
    props.profileValues.birthday || undefined,
  );
  const [open, setOpen] = useState(false);

  const submitBirthday = () => {
    if (!birthday) {
      showMessage({
        message: 'Error!',
        description: 'Birthday is required. Please select your birthday.',
        duration: 5000,
        color: '#E96479',
        backgroundColor: '#F5E9CF',
      });
    } else if (Math.floor((new Date() - birthday) / 31557600000) < 13) {
      showMessage({
        message: 'Error!',
        description: 'You must be over the age of 13 to use the application.',
        duration: 5000,
        color: '#E96479',
        backgroundColor: '#F5E9CF',
      });
    } else {
      props.updateProfileValues({
        birthday: birthday,
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
        <Lottie
          source={require('../../../../assets/birthday.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Birthday</Text>
        <Text style={styles.desc}>
          {'     '}We need your birthday information to use the application. You
          must be over the age of 13 to use the application.{'\n \n     '}Your
          birtday information must be filled in correctly. The birthday
          information you provide will not be allowed to be changed.
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <TouchableOpacity
          onPress={() => setOpen(true)}
          style={styles.selectBirthdayButton}>
          <Text style={styles.selectBirthdayButtonText}>
            {birthday ? birthday.toLocaleDateString('en-GB') : 'Select Birtday'}
          </Text>
        </TouchableOpacity>
        {birthday && (
          <View style={styles.ageContainer}>
            <Text style={styles.ageText}>
              Your Age :{' '}
              {Math.floor((new Date() - birthday + 86400000) / 31557600000)}
            </Text>
          </View>
        )}

        <DatePickerModal
          locale="en"
          mode="single"
          visible={open}
          onDismiss={() => setOpen(false)}
          date={birthday}
          onConfirm={({date}) => {
            setOpen(false);
            setBirthday(date);
          }}
          validRange={{endDate: new Date(), startDate: '1960-01-01'}}
          endYear={new Date().getFullYear()}
          startYear={1950}
        />
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
          <Button text={'Next'} handleSubmit={submitBirthday} loading={false} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default Birthday;
