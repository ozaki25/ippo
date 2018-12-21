import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import NavigationBar from 'src/components/organisms/NavigationBar/';

export default compose(
  withRouter,
  withFirebase,
)(NavigationBar);
