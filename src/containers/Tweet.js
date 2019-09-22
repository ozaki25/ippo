import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'context/firebase';
import query from 'graphql/query';
import mutation from 'graphql/mutation';
import Tweet from 'components/pages/Tweet';
import { withAuthorization } from 'hoc/Sessions';

const getHashtag = search => new URLSearchParams(search).get('hashtag') || 'none';

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
