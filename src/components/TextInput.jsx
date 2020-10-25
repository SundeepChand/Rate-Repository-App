import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../../themes';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 5,
    height: 50,
    paddingLeft: 10,
    fontSize: theme.fontSizes.body,
  },
  textInputError: {
    borderColor: theme.colors.red,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, style, error && styles.textInputError];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
