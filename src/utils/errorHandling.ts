export function getFriendlyErrorMessage(errorCode: string): string {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'The email address is invalid.'
    case 'auth/user-disabled':
      return 'This user has been disabled.'
    case 'auth/user-not-found':
      return 'User not found. Please sign up.'
    case 'auth/wrong-password':
      return 'Incorrect password. Please try again.'
    case 'auth/invalid-credential':
      return 'Invalid credential. Please try again.'
    default:
      return 'An unexpected error occurred. Please try again later.'
  }
}
