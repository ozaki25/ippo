import { withRouter } from 'react-router-dom';
import { withFirebase } from 'src/context/firebase';
import Signin from 'src/components/pages/Signin';

export default withRouter(withFirebase(Signin));
