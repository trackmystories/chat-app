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
      <h2 v-if="chatStore.selectedChat">{{ chatStore.selectedChat.name }} Channel</h2>
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
  align-items: center;
  justify-content: space-evenly;
}

.left {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
}

.right {
  width: 100%;
}

.right h2 {
  margin-left: 30px;
}
</style>