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