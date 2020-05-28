import React, { createContext, useState } from 'react';

export const AuthUserContext = createContext({});

export function AuthUserProvider(props) {
  const [authUser, setAuthUser] = useState(null);
  return (
    <AuthUserContext.Provider {...props} value={{ authUser, setAuthUser }} />
  );
}

export default AuthUserContext;
