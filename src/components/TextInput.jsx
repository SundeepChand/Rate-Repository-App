import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../../themes';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 5,
    marginBottom: 20,
    height: 50,
    paddingLeft: 10,
    fontSize: theme.fontSizes.body,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
