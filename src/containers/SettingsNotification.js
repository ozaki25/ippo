import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import mutation from 'graphql/mutation';
import SettingsNotification from 'components/pages/SettingsNotification/';
import { withFirebase } from 'context/firebase';
import { withAuthorization } from 'hoc/Sessions';
import withNotification from 'hoc/withNotification';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
  withNotification,
  graphql(mutation.registerNotification, { name: 'registerNotification' }),
  graphql(mutation.unregisterNotification, { name: 'unregisterNotification' }),
)(SettingsNotification);
