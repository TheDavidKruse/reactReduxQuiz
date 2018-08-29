export const getPosts = () => {
  return {
    type: 'FETCH_POSTS',
    payload: fetch('https://jsonplaceholder.typicode.com/posts')
  }
}

export const addPost = (post) => {
  return {
    type: 'ADD_POST',
    payload: post
  }
}