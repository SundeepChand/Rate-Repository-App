import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#f5f5f5',
    textSecondary: '#24292e',
    primary: '#24292e',
    secondary: '#e1e4e8',
    black: '#000',
    white: '#fff',
    blue: '#0366d6',
    red: '#d73a4a',
  },
  fontSizes: {
    body: 16,
    subheading: 18,
    heading: 20,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System',
    })
  },
  fontWeights: {
    normal: '400',
    semiBold: '500',
    bold: '700',
  },
};

export default theme;
