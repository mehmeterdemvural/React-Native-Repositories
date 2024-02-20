import React, {useState} from 'react';
import {ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from 'formik';

import {styles} from './Signin.styles';
import SigninValidation from './SigninValidation';
import {useAuth} from '../../../contexts/AuthContext';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

function Signin({navigation}) {
  const [signinLoading, setSigninLoading] = useState(null);
  const {signinFunc} = useAuth();

  const initialSigninValues = {
    email: '',
    password: '',
  };

  const handleSigninSubmit = async signinValues => {
    setSigninLoading(true);
    await signinFunc(signinValues);
    setSigninLoading(null);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <Formik
          validationSchema={SigninValidation}
          initialValues={initialSigninValues}
          onSubmit={handleSigninSubmit}>
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

              <Button
                text={'Sign In'}
                loading={signinLoading}
                handleSubmit={handleSubmit}
              />
            </>
          )}
        </Formik>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

export default Signin;
