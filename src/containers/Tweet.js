import { graphql } from '@apollo/react-hoc';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import Tweet from 'src/components/pages/Tweet';
import { withAuthorization } from 'src/hoc/Sessions';

const getHashtag = search =>
  new URLSearchParams(search).get('hashtag') || 'none';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(query.tweet, {
    options: ({ match: { params }, location: { search } }) => ({
      variables: { hashtag: getHashtag(search), id: params.id },
    }),
  }),
  graphql(mutation.addLikeToTweet, { name: 'addLike' }),
)(Tweet);
