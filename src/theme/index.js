import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    original: {
      50: '#e7effa',
      100: '#c4d7f3',
      200: '#9dbcec',
      300: '#76a1e4',
      400: '#588cde',
      500: '#3b78d8',
      600: '#3570d4',
      700: '#2d65ce',
      800: '#265bc8',
      900: '#1948bf',
      A100: '#f2f5ff',
      A200: '#bfcfff',
      A400: '#8ca9ff',
      A700: '#7396ff',
      contrastDefaultColor: 'light',
    },
    primary: {
      50: '#fffdea',
      100: '#fffac1',
      200: '#ffee4a',
      300: '#ffd760',
      400: '#ffc501',
      500: '#ffba00',
      600: '#ffb002',
      700: '#ffa301',
      800: '#fe9600',
      900: '#03001c',
      A100: '#fffac1',
      A200: '#ffee4a',
      A400: '#ffba00',
      A700: '#fe9600',
      contrastDefaultColor: 'light',
    },
  },
  typography: { useNextVariants: true },
});

export default theme;
