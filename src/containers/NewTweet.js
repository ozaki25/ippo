import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'context/firebase';
import query from 'graphql/query';
import mutation from 'graphql/mutation';
import NewTweet from 'components/pages/NewTweet';
import { withAuthorization } from 'hoc/Sessions';
import withHashtag from 'hoc/withHashtag';
import withParentTweet from 'hoc/withParentTweet';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  withHashtag,
  withParentTweet,
  graphql(mutation.createTweet, { name: 'createTweet' }),
  graphql(query.tweet, {
    name: 'parentTweet',
    options: ({ match: { params }, hashtag, parentId }) => ({
      variables: { hashtag, id: parentId },
    }),
  }),
)(NewTweet);
