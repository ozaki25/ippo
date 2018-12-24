import { graphql } from 'react-apollo';
import query from 'src/graphql/query';
import NewTweet from 'src/components/organisms/NewTweet';

export default graphql(query.createTweet, { name: 'createTweet' })(NewTweet);
