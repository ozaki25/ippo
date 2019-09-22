import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Router from 'router';
import client from 'graphql/client';
import store from 'modules/createStore';
import Firebase from 'utils/firebase';
import FirebaseContext from 'context/firebase';
import theme from 'theme';
import { withAuthentication } from 'hoc/Sessions';
import 'customelements/uploader';

const AuthRouter = withAuthentication(Router);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <FirebaseContext.Provider value={new Firebase()}>
          <AuthRouter />
        </FirebaseContext.Provider>
      </Provider>
    </ApolloProvider>
  </MuiThemeProvider>
);

export default App;
