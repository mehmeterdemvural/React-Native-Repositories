import React, {useState} from 'react';
import {ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from 'formik';

import {styles} from './Signup.styles';
import SignupValidation from './SigupValidation';
import {useAuth} from '../../../contexts/AuthContext';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

function Signup({navigation}) {
  const [signupLoading, setSignupLoading] = useState(null);
  const {signupFunc} = useAuth();

  const initialSignupValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSignupSubmit = async signupValues => {
    setSignupLoading(true);
    const status = await signupFunc(signupValues);
    console.log(status);

    if (status) {
      navigation.navigate('SigninPage');
    }
    setSignupLoading(null);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <Formik
          validationSchema={SignupValidation}
          initialValues={initialSignupValues}
          onSubmit={handleSignupSubmit}>
          {({
            handleSubmit,
            handleBlur,
            handleChange,
            touched,
            values,
            errors,
          }) => (
            <>
              <Input
                iconName={'email-outline'}
                textName={'Email'}
                para={'email'}
                touched={touched}
                errors={errors}
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                autoCapitalize={'none'}
                isSecure={false}
              />

              <Input
                iconName={'account-key-outline'}
                textName={'Password'}
                para={'password'}
                touched={touched}
                errors={errors}
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                isSecure
              />

              <Input
                iconName={'account-key-outline'}
                textName={'Confirm Password'}
                para={'confirmPassword'}
                touched={touched}
                errors={errors}
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                isSecure
              />

              <Button
                text={'Sign Up'}
                loading={signupLoading}
                handleSubmit={handleSubmit}
              />
            </>
          )}
        </Formik>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

export default Signup;
