import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  touchable: {
    backgroundColor: theme.colors.blue,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <React.Fragment>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.touchable} onPress={onSubmit}>
        <Text color="textWhite" fontSize="heading" fontWeight="bold" style={{ textAlign: "center" }}>Sign In</Text>
      </TouchableOpacity>
    </React.Fragment>
  );
};

const SignIn = () => {

  const onSubmit = values => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
