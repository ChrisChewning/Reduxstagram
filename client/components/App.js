import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
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


//mapStateToProps and mapDispatchToProps takes the state (posts, comments) and the dispatch (aciton creators) and surface
//that data via props in the component.
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App = connect(mapStateToProps, mapDispatchToProps)
