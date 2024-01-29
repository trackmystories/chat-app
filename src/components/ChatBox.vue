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
  console.log('currentUserId', props.currentUserId)
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
  background: #8ecdf5;
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
  flex-direction: column;
  margin: 5px;
  padding: 10px;
  background-color: #bab7ad;
  border-radius: 10px;
}

.my-message {
  display: flex !important;
  align-self: flex-end !important;
  background-color: #7898fa !important;
}

.other-message {
  align-self: flex-start !important;
  background-color: #fff;
  color: #bab7ad;
}
input {
  flex-grow: 1;
  border: 1px solid #ccc;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px;
}

button {
  border-radius: 5px;
  width: 20%;
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

@media (max-width: 768px) {
  .chat-container {
    margin: 10px;
    padding: 5px;
  }

  .messages {
    padding: 5px;
  }

  .message {
    margin: 3px;
    padding: 5px;
    font-size: 0.9em;
  }

  input,
  button {
    padding: 8px;
    font-size: 0.9em;
  }

  button {
    width: 30%;
  }

  form {
    flex-direction: column;
    align-items: stretch;
  }

  input {
    margin-bottom: 10px;
    margin-right: 0;
  }
}

@media (max-width: 480px) {
  .message {
    font-size: 0.8em;
  }

  button {
    width: auto;
  }
}
</style>
