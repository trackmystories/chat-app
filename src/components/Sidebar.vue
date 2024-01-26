<template>
  <div id="sidebar">
    <div
      v-for="chat in chats"
      :key="chat.id"
      class="chat-item"
      :class="{ 'selected-chat': chat.id === selectedChatId }"
      @click="selectChat(chat.id)"
    >
      {{ chat.name }}
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  chats: Array,
  selectedChatId: String
})

const emit = defineEmits(['selectChat'])

const selectChat = (chatId) => {
  emit('selectChat', chatId)
}
</script>

<style scoped>
#sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.chat-item {
  display: flex;
  margin: 20px;
  width: 90%;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0.8px solid #333;
}

.selected-chat {
  background-color: orange;
  color: #fff;
  border: none;
}
</style>
