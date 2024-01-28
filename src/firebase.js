import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBIl-7WJ3mpH-ki6AcahjdSQpQSzp3G2RQ',
  authDomain: 'chat-app-vue-9ca58.firebaseapp.com',
  projectId: 'chat-app-vue-9ca58',
  storageBucket: 'chat-app-vue-9ca58.appspot.com',
  messagingSenderId: '787531609366',
  appId: '1:787531609366:web:fc31d70b02c3cd25cdcc37'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
