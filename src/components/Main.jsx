import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

import Text from './Text';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
  header: {
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: 'center',
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text fontSize="heading" fontWeight="bold" style={styles.header}>Rate Repository Application</Text>

      <RepositoryList />
    </View>
  );
};

export default Main;
