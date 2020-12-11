import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Router from 'src/router';
import client from 'src/graphql/client';
import { AuthUserProvider } from 'src/context/authUser';
import { FirebaseProvider } from 'src/context/firebase';
import useAuthentication from 'src/hooks/useAuthentication';
import theme from 'src/theme';
import 'src/customelements/uploader';

function AuthRouter() {
  useAuthentication();
  return <Router />;
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <AuthUserProvider>
          <FirebaseProvider>
            <AuthRouter />
          </FirebaseProvider>
        </AuthUserProvider>
      </ApolloProvider>
    </MuiThemeProvider>
  );
}

export default App;
