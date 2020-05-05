import { auth } from 'firebase';

interface Firebase {
  auth: (() => auth.Auth) | undefined;
}

export default Firebase;
