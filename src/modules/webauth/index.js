const WEB_AUTH_ADD = 'WEB_AUTH/ADD';

export function setRawId({ rawId, uid }) {
  return { type: WEB_AUTH_ADD, body: { rawId, uid } };
}

const INITIAL_STATE = {
  rawId: null,
  uid: null,
};

function reducer(state = INITIAL_STATE, action) {
  const { type, body } = action;
  switch (type) {
    case WEB_AUTH_ADD: {
      const { rawId, uid } = body;
      return { ...state, rawId, uid };
    }
    default:
      return state;
  }
}

export default reducer;
