<template>
  <input :type="type" :placeholder="placeholder" :value="value" @input="handleInput" />
</template>

<script>
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
    handleInput(event) {
      const target = event.target
      if (target) {
        this.$emit('update:value', target.value)
      }
    }
  }
})
</script>
