import { combineReducers } from 'redux';
import reducerList from './reducers';

const reducer = combineReducers(reducerList);

export default reducer;