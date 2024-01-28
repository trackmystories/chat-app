// src/stores/chatStore.js
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
      {
        id: 'cats',
        name: 'Cats',
        about:
          'On the Cat Chat channel, fellow cat enthusiasts often share heartwarming stories of their feline friends'
      },
      {
        id: 'dogs',
        name: 'Dogs',
        about:
          'In the Dog Chat channel, members joyfully post photos of their dogs adventures, showcasing their playful and loyal nature.'
      },
      {
        id: 'books',
        name: 'Books',
        about:
          'The Book Chat channel is a haven for bibliophiles, where they delve into discussions about their latest reads and timeless classics'
      },
      {
        id: 'travel',
        name: 'Travel',
        about:
          'The Travel Chat channel is filled with vibrant stories and tips from globetrotters sharing their experiences from different corners of the world'
      }
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
