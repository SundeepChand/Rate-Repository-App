import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

import AppBar from './Appbar';
import RepositoryList from './RepositoryList';
import theme from '../../themes';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.secondary,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar>Repositories</AppBar>
      <RepositoryList />
    </View>
  );
};

export default Main;
