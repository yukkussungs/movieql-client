import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apolloClient';
import Home from './Home';
import Detail from './Detail';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact={true} path={"/"} component={Home} />
        <Route path={"/details/:movieId"} component={Detail} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
