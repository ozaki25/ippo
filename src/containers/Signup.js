import { withRouter } from 'react-router-dom';
import { withFirebase } from 'context/firebase';
import { compose } from 'recompose';
import Signup from 'components/pages/Signup';

export default compose(
  withRouter,
  withFirebase,
)(Signup);
