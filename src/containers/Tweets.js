import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'context/firebase';
import query from 'graphql/query';
import mutation from 'graphql/mutation';
import Tweets from 'components/pages/Tweets/';
import { withAuthorization } from 'hoc/Sessions';
import paging from 'constants/paging';
import tweetPolling from 'constants/tweetPolling';

const getHashtag = search => new URLSearchParams(search).get('hashtag') || 'none';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(query.tweets, {
    options: ({ location: { search }, authUser: { uid } }) => ({
      pollInterval: tweetPolling.duration,
      variables: { hashtag: getHashtag(search), limit: paging.tweetsPerPage, uid },
    }),
  }),
  graphql(mutation.addLikeToTweet, { name: 'addLike' }),
)(Tweets);
