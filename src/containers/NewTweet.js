import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import NewTweet from 'src/components/pages/NewTweet';
import { withAuthorization } from 'src/hoc/Sessions';
import withHashtag from 'src/hoc/withHashtag';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  withHashtag,
  graphql(query.createTweet, { name: 'createTweet' }),
)(NewTweet);
