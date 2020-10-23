import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';

import Text from './Text';
import theme from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    padding: 20,
  },
});

const AppBar = ({ children }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <Text color="textPrimary" fontSize="subheading" fontWeight="bold">
          {children}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppBar;
