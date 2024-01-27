import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  doc,
  getDoc
} from 'firebase/firestore'

export const useChatStore = defineStore('chatStore', {
  state: () => ({
    chats: [
      { id: 'cats', name: 'Cats' },
      { id: 'dogs', name: 'Dogs' },
      { id: 'books', name: 'Books' },
      { id: 'travel', name: 'Travel' }
    ],
    selectedChat: null,
    messages: [],
    currentUser: null,
    currentUserId: null,
    currentUserUsername: ''
  }),
  actions: {
    selectChat(chatId) {
      this.selectedChat = this.chats.find((chat) => chat.id === chatId)
      this.fetchMessages(chatId)
    },
    async fetchMessages(chatId) {
      const db = getFirestore()
      const messagesRef = collection(db, `chats/${chatId}/messages`)
      const messagesQuery = query(messagesRef, orderBy('createdAt'))

      onSnapshot(messagesQuery, (querySnapshot) => {
        this.messages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt.toDate()
        }))
      })
    },
    async sendMessage(messageText) {
      if (!messageText.trim() || !this.selectedChat) return
      const db = getFirestore()
      const auth = getAuth()
      const currentUser = auth.currentUser
      if (!currentUser) throw new Error('No authenticated user found.')

      const userDocRef = doc(db, 'users', currentUser.uid)
      const userDocSnap = await getDoc(userDocRef)
      const username = userDocSnap.exists() ? userDocSnap.data().username : 'Anonymous'

      await addDoc(collection(db, `chats/${this.selectedChat.id}/messages`), {
        text: messageText,
        createdAt: new Date(),
        userId: currentUser.uid,
        username: username
      })
    },
    initializeAuthState() {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.currentUserId = user.uid
          const userDocRef = doc(getFirestore(), 'users', user.uid)
          getDoc(userDocRef).then((docSnap) => {
            if (docSnap.exists()) {
              this.currentUserUsername = docSnap.data().username
            }
          })
        } else {
          this.currentUserId = null
          this.currentUserUsername = ''
        }
      })
    },
    canSendMessage() {
      return this.currentUserUsername !== 'Anonymous' && this.currentUserUsername !== ''
    }
  }
})
