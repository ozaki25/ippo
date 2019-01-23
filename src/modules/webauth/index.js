const WEB_AUTH_ADD = 'WEB_AUTH/ADD';

export function setRawId(rawId) {
  return { type: WEB_AUTH_ADD, rawId };
}

const INITIAL_STATE = {
  rawId: null,
};

function reducer(state = INITIAL_STATE, action) {
  const { type, rawId } = action;
  switch (type) {
    case WEB_AUTH_ADD: {
      return { ...state, rawId };
    }
    default:
      return state;
  }
}

export default reducer;
