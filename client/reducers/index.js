import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';


//posts, comments, and the changes (this is the routing. the changes get logged in redux)
const rootReducer = combineReducers({posts, comments, router: routerReducer});

export default rootReducer;
