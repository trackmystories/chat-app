<template>
  <div class="chat-container">
    <div class="messages">
      <div
        v-for="message in messages"
        :key="message.id"
        :class="{
          'my-message': message.userId === currentUserId,
          'other-message': message.userId !== currentUserId
        }"
        class="message"
      >
        <strong>{{ message.username }}:</strong> <span>{{ message.text }}</span>
      </div>
    </div>
    <div v-if="canSendMessage">
      <form @submit.prevent="sendMessage(newMessage)">
        <input v-model="newMessage" placeholder="Type a message" />
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Props
const props = defineProps({
  messages: Array,
  onSendMessage: Function,
  canSendMessage: Boolean,
  currentUserId: String
})

const newMessage = ref('')

const sendMessage = (message) => {
  console.log('message', message)
  props.onSendMessage(message)
  newMessage.value = ''
}
</script>

<style lang="css" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  height: 500px;
  background: #fff;
  color: #fff;
}

.messages {
  max-width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.message {
  display: flex;
  margin: 5px;
  padding: 10px;
  background-color: blue !important;
  border-radius: 10px !important;
  max-width: 70% !important;
}

.my-message {
  display: flex !important;
  align-self: flex-end !important;
  background-color: green !important;
}

.other-message {
  align-self: flex-start !important;
  background-color: blue !important;
}
input {
  flex-grow: 1;
  border: 1px solid #ccc;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

form {
  display: flex;
  margin-top: 10px;
}
</style>
