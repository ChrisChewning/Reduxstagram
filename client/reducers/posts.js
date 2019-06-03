//a reducer takes in two things:
//1. the action (info on what happened)
//2. a copy of current defaultState

//takes in the action, store. okay let me update the store.
//then react updates the UI, virtual dom etc.


//state=[] so the first time it runs it's not equal to anything.

function posts(state=[], action){
  switch(action.type){
    case "INCREMENT_LIKES" :
    console.log("Incrementing Likes!!");
    const i = action.index;
    return [
      ...state.slice(0,i), //before the one we are updating
      {...state[i], likes: state[i].likes + 1},  //pass a new object. object spread. This makes a copy.
      ...state.slice(i, + 1) //after the one we are updating
    ]
    default:
      return state;  //return the entire array.
  }
}

export default posts;


//seems like you would do: state[action.i].likes++;
//however, we are mutating something outside this function and this will give us a nonreliable data.
