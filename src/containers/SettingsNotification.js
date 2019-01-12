import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import query from 'src/graphql/query';
import SettingsNotification from 'src/components/pages/SettingsNotification/';
import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';
import withNotification from 'src/hoc/withNotification';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  withNotification,
  graphql(query.registerNotification, { name: 'registerNotification' }),
  graphql(query.unregisterNotification, { name: 'unregisterNotification' }),
)(SettingsNotification);
