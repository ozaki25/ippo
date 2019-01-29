import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import Tweets from 'src/components/pages/Tweets/';
import { withAuthorization } from 'src/hoc/Sessions';
import paging from 'src/constants/paging';
import tweetPolling from 'src/constants/tweetPolling';

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
