import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'

// reducer returns a piece of state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
