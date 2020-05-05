import { auth, User } from 'firebase';
import { FirebaseInterface } from '../util';

import { useEffect } from 'react';
import { LoadingHook, useLoadingValue } from '../util';

export type AuthStateHook = LoadingHook<User, auth.Error>;

export default (
  firebase: FirebaseInterface | undefined | null
): AuthStateHook => {
  if (
    firebase === null ||
    firebase === undefined ||
    typeof firebase.auth !== 'function' ||
    !firebase.auth()
  )
    return [undefined, true, undefined];

  const auth: auth.Auth = firebase.auth();

  const { error, loading, setError, setValue, value } = useLoadingValue<
    User,
    auth.Error
  >(() => auth.currentUser);

  useEffect(() => {
    const listener = auth.onAuthStateChanged(setValue, setError);

    return () => {
      listener();
    };
  }, [auth]);

  return [value, loading, error];
};
