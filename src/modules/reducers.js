import { combineReducers } from 'redux';
import session from 'src/modules/session';
import webauth from 'src/modules/webauth';

const reducer = combineReducers({ session, webauth });

export default reducer;
