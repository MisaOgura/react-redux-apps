export function selectBook (book) {
  // selectBook is an ActionCreator
  // it needs to return an action, an object with a type property
  return {
    // must always have type defined
    type: 'BOOK_SELECTED',
    payload: book
  }
}