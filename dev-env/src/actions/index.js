// action types

export const INCREMENT_LIKES = 'INCREMENT_LIKES';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


// action creators

export function increment(index) {
  return { type: INCREMENT_LIKES, index }
}

export function addComment(courseId, author, comment) {
  return { type: ADD_COMMENT, courseId, author, comment }
}

export function removeComment(courseId, i) {
  return { type: REMOVE_COMMENT, i, courseId }
}
