export const getComments = () => {
  return {
    type: 'FETCH_COMMENTS',
    payload: fetch("https://jsonplaceholder.typicode.com/comments").then(data => data.json()).catch(err => console.log("getcomments err:", err))
  }
}