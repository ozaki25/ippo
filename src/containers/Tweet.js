import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { compose } from 'recompose';
import { useHistory } from 'react-router-dom';

import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import Tweet from 'src/components/pages/Tweet';

const getHashtag = search =>
  new URLSearchParams(search).get('hashtag') || 'none';

const WithTweet = compose(withAuthorization, withFirebase)(TweetContainer);

function TweetContainer(props) {
  const {
    match: {
      params: { id },
    },
    location: { search },
  } = props;
  const history = useHistory();
  const { data, loading, error, refetch, variables } = useQuery(query.tweet, {
    variables: { hashtag: getHashtag(search), id },
  });
  const [addLike] = useMutation(mutation.addLikeToTweet);
  return (
    <Tweet
      {...props}
      history={history}
      addLike={addLike}
      data={{ ...data, loading, error, refetch, variables }}
    />
  );
}

export default WithTweet;
