import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../../themes';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorBlack: {
    color: theme.colors.black,
  },
  colorWhite: {
    color: theme.colors.white,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  fontWeightSemiBold: {
    fontWeight: theme.fontWeights.semiBold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, children }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'textPrimary' && styles.colorPrimary,
    color === 'textBlack' && styles.colorBlack,
    color === 'textWhite' && styles.colorWhite,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'heading' && styles.fontSizeHeading,
    fontWeight === 'bold' && styles.fontWeightBold,
    fontWeight === 'semi-bold' && styles.fontWeightSemiBold,
    style,
  ];

  return <NativeText style={textStyle}>{children}</NativeText>;
};

export default Text;
