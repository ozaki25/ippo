import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import Tweets from 'src/components/pages/Tweets/';
import { withAuthorization } from 'src/hoc/Sessions';
import paging from 'src/constants/paging';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  graphql(query.tweets, {
    options: ({ location: { search } }) => {
      const params = new URLSearchParams(search);
      const hashtag = params.get('hashtag') || 'none';
      return { variables: { hashtag, limit: paging.tweetsPerPage } };
    },
  }),
)(Tweets);
