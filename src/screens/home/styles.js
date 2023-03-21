import { StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.background,
  },
  titulo: {
    backgroundColor: THEME.colors.background,
    textAlign: 'center',
    fontSize: 30,
    color: THEME.colors.title,
  },
  subtitulo: {
    backgroundColor: THEME.colors.background,
    fontSize: 24,
    color: THEME.colors.subtitle,
    textAlign: 'center',
  },
  parrafo: {
    backgroundColor: THEME.colors.background,
    fontSize: 18,
    color: THEME.colors.gray,
    textAlign: 'center',
  },
  content: {
    width: '100%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,

  },
});
