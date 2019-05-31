//a reducer takes in two things:
//1. the action (info on what happened)
//2. a copy of current defaultState

//takes in the action, store. okay let me update the store.
//then react updates the UI, virtual dom etc.


//state=[] so the first time it runs it's not equal to anything.

function posts(state=[], action){
console.log(state, action);
return state;
}

export default posts;
