export const getAuthors = () => {
  return {
    type: 'FETCH_AUTHORS',
    payload: fetch("https://jsonplaceholder.typicode.com/users").then(data => data.json()).catch(err => console.log("getauthors err:", err))
  }
}