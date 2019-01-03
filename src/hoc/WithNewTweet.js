import React from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import NewTweet from 'src/components/pages/NewTweet';
import { withAuthorization } from 'src/hoc/Sessions';

const withHashtag = Component => ({ location: { search }, ...props }) => (
  <Component {...props} hashtag={new URLSearchParams(search).get('hashtag') || 'none'} />
);

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  withHashtag,
  graphql(query.createTweet, { name: 'createTweet' }),
)(NewTweet);
