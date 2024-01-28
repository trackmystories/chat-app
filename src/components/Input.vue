<template>
  <input :type="type" :placeholder="placeholder" :value="value" @input="handleInput" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Input',
  props: {
    type: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput(event: Event) {
      const target = event.target as HTMLInputElement
      if (target) {
        this.$emit('update:value', target.value)
      }
    }
  }
})
</script>
