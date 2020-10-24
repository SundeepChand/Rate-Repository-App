import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import Text from './Text';
import theme from '../../themes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  text: {
    marginRight: 10,
  },
});

const generateRoutes = (routes) => routes.map(({ route, name }, index) => (
  <Link to={route} key={index} component={TouchableOpacity}>
    <Text style={styles.text} color="textPrimary" fontSize="subheading" fontWeight="bold">
      {name}
    </Text>
  </Link>
));

const AppBar = ({ routes }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        { generateRoutes(routes) }
      </ScrollView>
    </View>
  );
};

export default AppBar;
