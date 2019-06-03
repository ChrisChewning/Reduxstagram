//increment the likes. index is the post.
//you are sending as little info as needed so not the whole post.

export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index: index
  }
}


//add comment
export function addComment(postId, author, comment){
  console.log("dispatching add comment")
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comment. index is the post. Could be i for short.
export function removeComment(postId, index){
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId,
  }
}



//NOTE: we call these action creators. The action is the return object.
//the action creator is the function.


//changing the route. When you change the page it is something that happens
//in the application. We save this in the store. react-router-redux.
