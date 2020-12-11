import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import 'typeface-roboto';
import theme from '../src/theme';
import store from '../src/modules/createStore';
import '../src/index.css';

export default storyFn => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>{storyFn()}</MuiThemeProvider>
  </Provider>
);
