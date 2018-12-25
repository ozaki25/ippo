import { graphql, compose } from 'react-apollo';
import { withFirebase } from 'src/context/firebase';
import query from 'src/graphql/query';
import Notification from 'src/components/pages/Notification';

export default compose(
  graphql(query.publishNotification, { name: 'publishNotification' }),
  graphql(query.registerNotification, { name: 'registerNotification' }),
)(withFirebase(Notification));
