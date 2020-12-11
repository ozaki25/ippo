import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { compose } from 'recompose';
import { useHistory } from 'react-router-dom';

import useFirebase from 'src/hooks/useFirebase';
import { withAuthorization } from 'src/hoc/Sessions';
import withHashtag from 'src/hoc/withHashtag';
import withParentTweet from 'src/hoc/withParentTweet';
import query from 'src/graphql/query';
import mutation from 'src/graphql/mutation';
import NewTweet from 'src/components/pages/NewTweet';

const WithNewTweet = compose(
  withAuthorization,
  withHashtag,
  withParentTweet,
)(NewTweetContainer);

function NewTweetContainer(props) {
  const { hashtag, parentId } = props;
  const history = useHistory();
  const firebase = useFirebase();
  const { data, loading, error, fetchMore } = useQuery(query.tweet, {
    variables: { hashtag, id: parentId },
  });
  const [createTweet] = useMutation(mutation.createTweet);
  return (
    <NewTweet
      {...props}
      history={history}
      firebase={firebase}
      createTweet={createTweet}
      parentTweet={{ ...data, loading, error, fetchMore }}
    />
  );
}

export default WithNewTweet;
