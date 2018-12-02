import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import query from 'src/graphql/query';

const WithHello = ({ data: { hello, count } }) => (
  <>
    <h1 className="bp3-heading">Hello Ippo</h1>
    <h3 className="bp3-heading">{[...Array(count)].map(() => `${hello} `)}</h3>
    <Link to="/events">イベント一覧</Link>
  </>
);

export default graphql(query.hello)(WithHello);
