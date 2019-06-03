function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
    //return existing state plus new comment. user and text is used b.c our data has that.
    return [...state, {
      user: action.author,
      text: action.comment
    }];

    case 'REMOVE_COMMENT':
    console.log('removing a comment');
    return [
      //from start to the one we want to delete
      ...state.slice(0,action.i),
      //after the deleted one, to the end
      ...state.slice(action.i + 1)
    ]
    default:
      return state;
  }
  return state;
}

function comments(state=[], action){
if (typeof action.postId !== 'undefined') {
  return {
    //take the current state.
    ...state,
    //overwrite this post with a new one. you take the key.
    //postComments is the subReducer
    //pass along the action payload.
    [action.postId]: postComments(state[action.postId], action)
  }
}
return state;
}

export default comments;
