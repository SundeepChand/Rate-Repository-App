import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import AppBar from './Appbar';
import RepositoryList from './RepositoryList';
import theme from '../../themes';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.secondary,
  },
});

const routes = [
  {
    name: "Repositories",
    route: "/"
  },{
    name: "Sign In",
    route: "/signin"
  },
];

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar routes={routes} />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
