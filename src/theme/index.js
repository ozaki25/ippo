import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#3B78D8' },
  },
  typography: { useNextVariants: true },
});

export default theme;
