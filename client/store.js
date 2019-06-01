import { createStore, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

//import the root reducer. This is
import rootReducer from './reducers/index';

//default data.
import comments from './data/comments';
import posts from './data/posts';


//create an object for the default data
const defaultState = {
  posts,
  comments
}

//note: in ES6 if the property key and variable name are the same
//you can just say posts, comments instead of posts: posts, comments: comments
//just put the variable name instead.

//create the store. we imported the method createStore. Now it takes in two properties(?).
//1st rootReducer, which is how we interface with it. 2nd: the defaultState
const store = createStore(rootReducer, defaultState);


//de-... syncHistoryWithStore method to variable history.
//browserHistory is when you go page to page it keeps track of where you've gone.
//it takes that data and weave in the actual store.
//to be accessible to other files, export it.
export const history = syncHistoryWithStore(browserHistory, store);

export default store;
//could have also said export default const store above. Why default?
