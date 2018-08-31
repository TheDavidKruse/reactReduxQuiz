//This was going to be a nice loading screen but seemed too difficult to implement.

export const startLoading = () => {
  return {
    type: 'FETCH_AUTHORS',
    payload: true
  }
}

export const stopLoading = () => {
  return {
    type: 'FETCH_AUTHORS',
    payload: false
  }
}