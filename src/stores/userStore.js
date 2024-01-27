import { defineStore } from 'pinia'
import { getAuth, signInAnonymously } from 'firebase/auth'
import app from '@/firebase'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
    password: '',
    username: '',
    isSignUp: false,
    errorMessage: ''
  }),
  actions: {
    updateEmail(newEmail) {
      this.email = newEmail
    },
    updatePassword(newPassword) {
      this.password = newPassword
    },
    updateUsername(newUsername) {
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
        this.setErrorMessage(error.message)
      }
    },
    setErrorMessage(message) {
      this.errorMessage = message
    },

    clearErrorMessage() {
      this.errorMessage = ''
    }
  }
})
