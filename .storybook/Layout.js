import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';

export default storyFn => <MuiThemeProvider theme={theme}>{storyFn()}</MuiThemeProvider>;
