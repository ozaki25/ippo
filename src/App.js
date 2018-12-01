import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import 'src/App.css';
import WithHello from 'src/hoc/WithHello';
import client from 'src/graphql/client';

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <h1 className="bp3-heading">Hello IPPO</h1>
          <WithHello />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
