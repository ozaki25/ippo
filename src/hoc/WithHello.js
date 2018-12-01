import React from 'react';
import { graphql } from 'react-apollo';
import query from 'src/graphql/query';

const WithHello = ({ data: { hello, number } }) => (
  <h3>{[...Array(number)].map(() => `${hello} `)}</h3>
);

export default graphql(query.hello)(WithHello);
