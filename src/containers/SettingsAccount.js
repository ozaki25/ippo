import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import SettingsAccount from 'src/components/pages/SettingsAccount';
import { withFirebase } from 'src/context/firebase';
import { withAuthorization } from 'src/hoc/Sessions';

export default compose(
  withAuthorization,
  withRouter,
  withFirebase,
)(SettingsAccount);
