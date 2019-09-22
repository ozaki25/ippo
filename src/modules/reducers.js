import { combineReducers } from 'redux';
import session from 'modules/session';
import webauth from 'modules/webauth';

const reducer = combineReducers({ session, webauth });

export default reducer;
