<template>
  <div id="sidebar">
    <div class="title">Chat Channels</div>
    <div
      v-for="chat in chats"
      :key="chat.id"
      class="chat-item"
      :class="{ 'selected-chat': chat.id === selectedChatId }"
      @click="selectChat(chat.id)"
    >
      <span class="name"> {{ chat.name }}</span>
      <span class="about"> {{ chat.about }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface Chat {
  id: string
  name: string
  about: string
}

const props = defineProps({
  chats: Array as () => Chat[],
  selectedChatId: String
})

const emit = defineEmits<{
  (event: 'selectChat', chatId: string): void
}>()

const selectChat = (chatId: string) => {
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
  flex-direction: column;
  margin: 5px;
  height: 80px;
  width: 90%;
  border-radius: 6px;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #cedcf2;
  color: #fff;
  padding: 10px;
}

.selected-chat {
  background-color: #7898fa;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  border: none;
}

.title {
  color: #5451f0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.name {
  font-size: 12x;
  margin-bottom: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.about {
  font-size: 10px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
