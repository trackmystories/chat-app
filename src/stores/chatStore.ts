import { defineStore } from 'pinia'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  doc,
  getDoc,
  QueryDocumentSnapshot,
  DocumentData
} from 'firebase/firestore'

interface Chat {
  id: string
  name: string
  about: string
}

interface Message {
  id: string
  text: string
  createdAt: Date
  userId: string
  username: string
}

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
    ] as Chat[],
    selectedChat: null as Chat | null,
    messages: [] as Message[],
    currentUser: null as User | null,
    currentUserId: '' as string,
    currentUserUsername: ''
  }),
  actions: {
    updateCurrentUser(user) {
      this.currentUser = user
    },
    selectChat(chatId: string) {
      this.selectedChat = this.chats.find((chat) => chat.id === chatId) || null
      if (this.selectedChat) {
        this.fetchMessages(chatId)
      }
    },
    async fetchMessages(chatId: string) {
      const db = getFirestore()
      const messagesRef = collection(db, `chats/${chatId}/messages`)
      const messagesQuery = query(messagesRef, orderBy('createdAt'))

      onSnapshot(messagesQuery, (querySnapshot) => {
        this.messages = querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt.toDate()
        })) as Message[]
      })
    },
    async sendMessage(messageText: string) {
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
    canSendMessage(): boolean {
      return this.currentUserUsername !== 'Anonymous' && this.currentUserUsername !== ''
    }
  }
})
