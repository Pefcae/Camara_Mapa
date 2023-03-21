import { StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.white,
  },

  titulo: {
    backgroundColor: THEME.colors.background,
    textAlign: 'center',
    fontSize: 30,
    color: THEME.colors.title,
  },
  parrafo: {
    backgroundColor: THEME.colors.background,
    fontSize: 18,
    color: THEME.colors.gray,
    textAlign: 'center',
  },
});
