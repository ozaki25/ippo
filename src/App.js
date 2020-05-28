import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Router from 'src/router';
import client from 'src/graphql/client';
import { AuthUserProvider } from 'src/context/authUser';
import { FirebaseProvider } from 'src/context/firebase';
import theme from 'src/theme';
import { withAuthentication } from 'src/hoc/Sessions';
import 'src/customelements/uploader';

const AuthRouter = withAuthentication(Router);

const App = () => (
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

export default App;
