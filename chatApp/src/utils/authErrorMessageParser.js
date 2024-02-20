export default function (errorCode) {
  switch (errorCode) {
    case 'auth/email-already-exists':
      return {
        title: 'Sign up failed',
        desc: 'The user already exists !',
        type: 'danger',
      };
      case 'auth/email-already-in-use':
        return {
          title: 'Sign up failed',
          desc: 'Email already exists !',
          type: 'danger',
        };
    case 'auth/user-not-found':
      return {
        title: 'Sign in failed',
        desc: 'The user not found !',
        type: 'danger',
      };
    case 'auth/invalid-email':
      return {
        title: 'Sign in failed',
        desc: 'Invalid email adress !',
        type: 'danger',
      };
    case 'auth/wrong-password':
      return {
        title: 'Sign in failed',
        desc: 'Password is wrong !',
        type: 'danger',
      };
    default:
      return {
        title: 'Failed',
        desc: errorCode,
        type: 'danger',
      };
  }
}
