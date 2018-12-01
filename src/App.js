import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import 'src/App.css';
import client from 'src/graphql/client';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1 className="bp3-heading">Hello IPPO</h1>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
