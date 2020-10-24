import React from 'react';
import { StyleSheet, View } from 'react-native';

import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  text: {
    textAlign: "center",
  },
});

const InfoCard = ({ num, title }) => {
  num = num >= 1000 ? ((Math.round(num / 100) / 10).toString() + 'k') : num;
  return (
    <View style={styles.container}>
      <Text color="textBlack" fontSize="heading" fontWeight="bold" style={styles.text}>
        {num}
      </Text>
      <Text color="textBlack" fontWeight="semi-bold" style={styles.text}>{title}</Text>
    </View>
  );
};

export default InfoCard;
