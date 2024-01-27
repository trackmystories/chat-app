<template>
  <div id="login">
    <h1>WELCOME TO CHAT APP</h1>
    <form @submit.prevent="handleSubmit">
      <div v-if="userStore.isSignUp">
        <label for="username">Username : </label>
        <input
          placeholder="username"
          type="text"
          id="username"
          v-model="userStore.username"
          required
        />
      </div>
      <div>
        <label for="email">Email : </label>
        <input placeholder="email" type="email" id="email" v-model="userStore.email" required />
      </div>
      <div>
        <label for="password">Password : </label>
        <input
          placeholder="password"
          type="password"
          id="password"
          v-model="userStore.password"
          required
        />
      </div>

      <button type="submit" v-if="!userStore.isSignUp">Login</button>
      <button type="submit" v-if="userStore.isSignUp">Sign Up</button>
      <button @click="userStore.toggleSignUp">
        {{ userStore.isSignUp ? 'Already have an account? Login' : 'Need an account? Sign Up' }}
      </button>
      <button @click="handleGuestLogin">Login as Guest</button>
    </form>
  </div>
</template>

<script>
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

export default {
  name: 'LoginView',
  setup() {
    const router = useRouter()
    const auth = getAuth(app)
    const userStore = useUserStore()

    const handleSubmit = async () => {
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
      } catch (error) {
        console.error('Authentication error:', error)
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

    return { handleSubmit, handleGuestLogin, userStore }
  }
}
</script>

<style>
#login {
  margin: auto;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type='text'],
input[type='email'],
input[type='password'] {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
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

@media (min-width: 600px) {
  #login {
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>
