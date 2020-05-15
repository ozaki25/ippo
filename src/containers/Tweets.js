import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';
import paging from 'src/constants/paging';
import tweetPolling from 'src/constants/tweetPolling';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import Tweets from 'src/components/pages/Tweets/';

const getHashtag = search =>
  new URLSearchParams(search).get('hashtag') || 'none';

const WithTweets = compose(
  withAuthorization,
  withRouter,
  withFirebase,
)(TweetsContainer);

function TweetsContainer(props) {
  const {
    location: { search },
    authUser: { uid },
  } = props;
  const { data, loading, error, fetchMore, refetch, variables } = useQuery(
    query.tweets,
    {
      pollInterval: tweetPolling.duration,
      variables: {
        hashtag: getHashtag(search),
        limit: paging.tweetsPerPage,
        uid,
      },
    },
  );
  const [addLike] = useMutation(mutation.addLikeToTweet);
  return (
    <Tweets
      {...props}
      addLike={addLike}
      data={{ ...data, loading, error, fetchMore, refetch, variables }}
    />
  );
}

export default WithTweets;
