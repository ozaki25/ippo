import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import Tweets from 'src/components/pages/Tweets/';
import { withAuthorization } from 'src/hoc/Sessions';
import paging from 'src/constants/paging';

const getHashtag = search => new URLSearchParams(search).get('hashtag') || 'none';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(query.tweets, {
    options: ({ location: { search } }) => ({
      variables: { hashtag: getHashtag(search), limit: paging.tweetsPerPage },
    }),
  }),
  graphql(query.internalEvent, {
    name: 'event',
    options: ({ location: { search } }) => ({ variables: { hashtag: getHashtag(search) } }),
  }),
)(Tweets);
