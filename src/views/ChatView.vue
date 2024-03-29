<template>
  <div id="chat-layout">
    <div class="left">
      <Sidebar
        :chats="chatStore.chats"
        :selectedChatId="chatStore.selectedChat?.id"
        @selectChat="chatStore.selectChat"
      />
      <button @click="logout">Logout</button>
    </div>
    <div class="right">
      <h2 v-if="chatStore.selectedChat && chatStore.currentUser">
        {{ chatStore.currentUser.email }} | {{ chatStore.selectedChat.name }} Channel
      </h2>
      <ChatBox
        :messages="chatStore.messages"
        :currentUserId="chatStore.currentUserId"
        @sendMessage="chatStore.sendMessage"
        :canSendMessage="chatStore.canSendMessage()"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import ChatBox from '../components/ChatBox.vue'
import Sidebar from '../components/Sidebar.vue'
import { useChatStore } from '../stores/chatStore'

const router = useRouter()
const auth = getAuth()
const chatStore = useChatStore()

chatStore.initializeAuthState()

onAuthStateChanged(auth, (user) => {
  if (user) {
    chatStore.currentUser = user
  } else {
    chatStore.currentUser = null
  }
})

const logout = async () => {
  try {
    await signOut(auth)
    router.push('/login')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}

onMounted(() => {
  if (chatStore.chats.length > 0) {
    chatStore.selectChat(chatStore.chats[0].id)
  }
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})
</script>

<style scoped>
#chat-layout {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  font-family: Arial, Helvetica, sans-serif;
  color: #333;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
}

.right {
  width: 80%;
}

.right h2 {
  margin-left: 30px;
  color: grey;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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

@media (max-width: 768px) {
  .left,
  .right {
    width: 100%;
    align-items: center;
  }

  #chat-layout {
    flex-direction: column-reverse;
  }

  .right h2 {
    margin-left: 10px;
    font-size: 1.2em;
  }
}

@media (max-width: 400px) {
  .right h2 {
    font-size: 1em;
  }
}
</style>
