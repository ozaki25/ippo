import React from 'react';
import { graphql } from 'react-apollo';
import query from 'src/graphql/query';

const WithHello = ({ data: { hello, count } }) => (
  <h3>{[...Array(count)].map(() => `${hello} `)}</h3>
);

export default graphql(query.hello)(WithHello);
