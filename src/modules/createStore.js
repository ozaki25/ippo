import { createStore } from 'redux';
import reducers from 'src/modules/reducers';

const store = createStore(reducers);

export default store;
