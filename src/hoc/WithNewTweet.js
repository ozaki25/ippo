import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import query from 'src/graphql/query';
import NewTweet from 'src/components/organisms/NewTweet';
import { withAuthorization } from 'src/hoc/Sessions';

export default compose(withAuthorization)(
  graphql(query.createTweet, { name: 'createTweet' })(NewTweet),
);
