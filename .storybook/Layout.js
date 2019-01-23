import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';
import store from '../src/modules/createStore';

export default storyFn => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>{storyFn()}</MuiThemeProvider>
  </Provider>
);
