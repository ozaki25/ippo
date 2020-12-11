import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';
import theme from '../src/theme';
import '../src/index.css';

export default storyFn => (
  <MuiThemeProvider theme={theme}>{storyFn()}</MuiThemeProvider>
);
