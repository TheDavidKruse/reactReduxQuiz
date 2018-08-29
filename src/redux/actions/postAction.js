export const getPosts = () => {
  return {
    type: 'FETCH_POSTS',
    payload: fetch('https://jsonplaceholder.typicode.com/posts').then(data => data.json()).catch(err => console.log("getPosts error:", err))
  }
}

export const addPost = (post) => {
  return {
    type: 'ADD_POST',
    payload: post
  }
} 