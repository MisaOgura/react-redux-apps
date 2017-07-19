// state argument is not application state, only the
// state that this reducer is responsible for!
export default function (state = null, action) {
  // DO NOT MUTATE THE STATE
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }
  // when you don't care about an action
  // or when your app is first booted up
  return state
}