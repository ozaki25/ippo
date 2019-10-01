import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      50: '#fce0e0',
      100: '#f8b3b3',
      200: '#f38080',
      300: '#ee4d4d',
      400: '#ea2626',
      500: '#e60000',
      600: '#e30000',
      700: '#df0000',
      800: '#db0000',
      900: '#d50000',
      A100: '#fffcfc',
      A200: '#ffc9c9',
      A400: '#ff9696',
      A700: '#ff7d7d',
      contrastDefaultColor: 'light',
    },
  },
  typography: { useNextVariants: true },
});

export default theme;
