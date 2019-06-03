import { bindActionCreators } from 'redux'; //
import { connect } from 'react-redux'; //connect
import * as actionCreators from '../actions/actionCreators'; //this is increment, addComment and removeComment
import Main from './Main';


function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


//mapStateToProps and mapDispatchToProps takes the state (posts, comments)
//and the dispatch (action creators) and surface them (the data)
//via props in the component.

const App = connect(mapStateToProps, mapDispatchToProps)(Main);
//(Main is at the end so that it takes the regular Main component
// and it adds all the props (mapStateToProps) and the action creators(mapDispatchToProps)
//to Main.
export default App;
