const initialState = [];


export default (state = initialState, action) => {
  switch(action.type){
    case 'FETCH_POSTS_PENDING':
      return state
    case 'FETCH_POSTS_FULFILLED':
      return [...action.payload]
    case 'FETCH_POSTS_REJECTED':
      return state
    case 'ADD_POST':
        return [action.payload, ...state]

    default:
      return state
  }
}