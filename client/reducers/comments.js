// A reducer takes in two things:
// 1. The action (info about what happened)
// 2. Copy of current state

function comments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':

      console.log("yay");
    default:
      return state;
  }
}

export default comments;
