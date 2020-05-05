# React Firebase Hooks - Auth

React Firebase Hooks provides a convenience listener for Firebase Auth's auth state. The hook wraps around the `firebase.auth().onAuthStateChange()` method to ensure that it is always up to date.

All hooks can be imported from `react-firebase-hooks/auth`, e.g.

```
import { useAuthState } from 'react-firebase-hooks/auth';
```

List of Auth hooks:

- [React Firebase Hooks - Auth](#react-firebase-hooks---auth)
    - [useAuthState](#useauthstate)
      - [Full Example](#full-example)

### useAuthState

```
const [user, loading, error] = useAuthState(firebase);
```

Retrieve and monitor the authentication state from Firebase.

The `useAuthState` hook takes the following parameters:

- `firebase`: The `firebase` value from `gatsby-plugin-firebase`

Returns:

- `user`: The `firebase.User` if logged in, or `undefined` if not
- `loading`: A `boolean` to indicate whether the the authentication state is still being loaded
- `error`: Any `firebase.auth.Error` returned by Firebase when trying to load the user, or `undefined` if there is no error

#### Full Example

```jsx
import firebase from 'gatsby-plugin-firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const CurrentUser = () => {
  const [user, loading, error] = useAuthState(firebase);
  const login = () => {
    firebase.auth().signInWithEmailAndPassword('test@test.com', 'password');
  };
  const logout = () => {
    firebase.auth().signOut();
  };

  if (loading) {
    return (
      <div>
        <p>Loading User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    return (
      <div>
        <p>Current User: {user.email}</p>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }
  return <button onClick={login}>Log in</button>;
};
```
