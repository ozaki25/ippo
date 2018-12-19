import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import Signup from 'src/components/pages/Signup';

export default withRouter(withFirebase(Signup));
