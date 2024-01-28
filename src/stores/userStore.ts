import { defineStore } from 'pinia'
import { getAuth, signInAnonymously, AuthError } from 'firebase/auth'
import app from '../firebase.ts'

interface UserState {
  email: string
  password: string
  username: string
  isSignUp: boolean
  errorMessage: string
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    email: '',
    password: '',
    username: '',
    isSignUp: false,
    errorMessage: ''
  }),
  actions: {
    updateEmail(newEmail: string) {
      this.email = newEmail
    },
    updatePassword(newPassword: string) {
      this.password = newPassword
    },
    updateUsername(newUsername: string) {
      this.username = newUsername
    },
    toggleSignUp() {
      this.isSignUp = !this.isSignUp
    },
    async signInAsGuest() {
      const auth = getAuth(app)
      try {
        await signInAnonymously(auth)
        this.clearErrorMessage()
      } catch (error) {
        console.error('Guest login error:', error)
        this.setErrorMessage((error as AuthError).message)
      }
    },
    setErrorMessage(message: string) {
      this.errorMessage = message
    },
    clearErrorMessage() {
      this.errorMessage = ''
    }
  }
})
