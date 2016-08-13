function comments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {user: action.author, text: action.comment}
      ];
    default:
      return state;
  }
}

export default comments;
