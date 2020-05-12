import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import NewTweet from 'src/components/pages/NewTweet';
import { withAuthorization } from 'src/hoc/Sessions';
import withHashtag from 'src/hoc/withHashtag';
import withParentTweet from 'src/hoc/withParentTweet';

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
