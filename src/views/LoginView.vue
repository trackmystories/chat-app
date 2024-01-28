<template>
  <div id="login">
    <span class="title">WELCOME TO CHAT APP</span>
    <form class="form" @submit.prevent="handleSubmit">
      <div v-if="userStore.isSignUp">
        <Input
          id="username"
          type="text"
          placeholder="ENTER USERNAME"
          v-model="userStore.username"
          required
        />
      </div>
      <div>
        <Input
          placeholder=" ENTER EMAIL"
          type="email"
          id="email"
          v-model="userStore.email"
          required
        />
      </div>
      <div>
        <Input
          placeholder=" ENTER PASSWORD"
          type="password"
          id="password"
          v-model="userStore.password"
          required
        />
      </div>

      <div v-if="userStore.errorMessage" class="error-message">{{ userStore.errorMessage }}</div>

      <button type="submit" v-if="!userStore.isSignUp">Login</button>
      <button type="submit" v-if="userStore.isSignUp">Sign Up</button>
      <button @click="userStore.toggleSignUp">
        {{ userStore.isSignUp ? 'Already have an account? Login' : 'Need an account? Sign Up' }}
      </button>
      <button @click="handleGuestLogin">Login as Guest</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import app from '@/firebase'
import {
  getAuth,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { useUserStore } from '../stores/userStore'
import { getFriendlyErrorMessage } from '@/utils/errorHandling'
import Input from '@/components/Input.vue'

const router = useRouter()
const auth = getAuth(app)
const userStore = useUserStore()

const handleSubmit = async () => {
  userStore.clearErrorMessage()
  try {
    if (userStore.isSignUp) {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userStore.email,
        userStore.password
      )
      const userDocRef = doc(getFirestore(), 'users', userCredential.user.uid)
      await setDoc(userDocRef, { username: userStore.username })
    } else {
      await signInWithEmailAndPassword(auth, userStore.email, userStore.password)
    }
    router.push('/chat')
  } catch (error: any) {
    console.error('Authentication error:', error)
    const friendlyMessage = getFriendlyErrorMessage(error.code)
    userStore.setErrorMessage(friendlyMessage)
  }
}

const handleGuestLogin = async () => {
  try {
    await signInAnonymously(auth)
    router.push('/chat')
  } catch (error) {
    console.error('Guest login error:', error)
  }
}
</script>

<style>
#login {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

label {
  display: block;
  margin-bottom: 5px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.9rem;
  text-align: center;
  color: #2e5799;
}

input[type='text'],
input[type='email'],
input[type='password'] {
  width: 100%;
  height: 60px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  width: 375px;
  margin-bottom: 10px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  margin: 10px;
}

button:hover {
  background-color: #45a049;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 375px;
}

.title {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.5rem;
  text-align: center;
  color: #45a049;
  margin-bottom: 20px;
}

.error-message {
  color: red;
  text-align: center;
  margin-bottom: 10px;
}
</style>
