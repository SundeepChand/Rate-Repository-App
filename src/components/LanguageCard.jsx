import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../themes';

import Text from './Text';

const styles = StyleSheet.create({
  text: {
    backgroundColor: theme.colors.blue,
    color: theme.colors.white,
    flexGrow: 0,
    padding: 4,
    borderRadius: 5,
  },
});

const Language = ({ children }) => {
  return (
    <Text style={styles.text} fontSize="subheading" color="textBlack">{children}</Text>
  );
};

export default Language;
