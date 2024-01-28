import { mount } from '@vue/test-utils'
import ChatBox from '../ChatBox.vue'

describe('ChatBox', () => {
  it('renders a message for each item in props.messages', () => {
    const messages = [
      { id: '1', userId: '123', username: 'User1', text: 'Hello', createdAt: new Date() },
      { id: '2', userId: '456', username: 'User2', text: 'Hi there', createdAt: new Date() }
    ]
    const wrapper = mount(ChatBox, {
      props: { messages, currentUserId: '123' }
    })

    expect(wrapper.findAll('.message').length).toBe(messages.length)
  })

  it('applies .my-message class for messages from currentUserId', () => {
    const messages = [
      { id: '1', userId: '123', username: 'User1', text: 'Hello', createdAt: new Date() }
    ]
    const wrapper = mount(ChatBox, {
      props: { messages, currentUserId: '123' }
    })

    expect(wrapper.find('.message').classes()).toContain('my-message')
  })

  it('calls sendMessage when the form is submitted', async () => {
    const messages = []
    const onSendMessage = jest.fn()
    const wrapper = mount(ChatBox, {
      props: { messages, onSendMessage, canSendMessage: true, currentUserId: '123' }
    })

    await wrapper.find('input').setValue('New message')
    await wrapper.find('form').trigger('submit.prevent')
    expect(onSendMessage).toHaveBeenCalledWith('New message')
  })
})
