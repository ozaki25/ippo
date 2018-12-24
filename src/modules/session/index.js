const AUTH_USER_SET = 'SESSION/AUTH_USER_SET';

export function setAuthUser(authUser) {
  return { type: AUTH_USER_SET, authUser };
}

const INITIAL_STATE = {
  authUser: null,
};

function reducer(state = INITIAL_STATE, action) {
  const { type, authUser } = action;
  switch (type) {
    case AUTH_USER_SET: {
      return { ...state, authUser };
    }
    default:
      return state;
  }
}

export default reducer;
