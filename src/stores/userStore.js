import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
    password: '',
    username: '',
    isSignUp: false
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
    setErrorMessage(message) {
      this.errorMessage = message
    },
    clearErrorMessage() {
      this.errorMessage = ''
    }
  }
})
