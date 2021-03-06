import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Router from 'src/router';
import client from 'src/graphql/client';
import store from 'src/modules/createStore';
import Firebase from 'src/utils/firebase';
import { FirebaseProvider } from 'src/context/firebase';
import theme from 'src/theme';
import { withAuthentication } from 'src/hoc/Sessions';
import 'src/customelements/uploader';

const AuthRouter = withAuthentication(Router);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <FirebaseProvider value={new Firebase()}>
          <AuthRouter />
        </FirebaseProvider>
      </Provider>
    </ApolloProvider>
  </MuiThemeProvider>
);

export default App;
