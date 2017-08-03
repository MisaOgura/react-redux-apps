import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'
import _ from 'lodash'

export default function PostsReducer (state={}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload)

    case FETCH_POST:
      // const post = action.payload.data
      // const newState = { ...state }
      // newState[post.id] = post
      // return newState
      const fetchedPost = action.payload.data
      return { ...state, [fetchedPost.id]: fetchedPost}

    case FETCH_POSTS:
      // mapping over an array of objects, extract eact id
      // as a key and assign the objects as that value
      return _.mapKeys(action.payload.data, 'id')

    default:
      return state
  }
}