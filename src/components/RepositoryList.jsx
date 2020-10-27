import React from 'react';
import { FlatList, ActivityIndicator, View, StyleSheet, Text } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import theme from '../../themes';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  loading: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    textAlign: "center",
    fontSize: theme.fontSizes.subheading,
  },
});

const ItemSeparator = () => <View style={styles.separator}></View>

const RepositoryList = () => {
  const { repositories, loading, error } = useRepositories();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const renderItem = ({ item }) => {
    return (
      <RepositoryItem repository={item} />
    );
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loading}>
        <Text style={styles.errorMessage}>Oh no! Something Went Wrong 😢</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={repositoryNodes}
      renderItem={renderItem}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryList;
