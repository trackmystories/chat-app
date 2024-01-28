import { shallowMount } from '@vue/test-utils'
import Sidebar from '../Sidebar.vue'

describe('Sidebar.vue', () => {
  it('renders chat items and emits an event on click', async () => {
    const chats = [
      { id: '1', name: 'Chat 1', about: 'About Chat 1' },
      { id: '2', name: 'Chat 2', about: 'About Chat 2' }
    ]
    const selectedChatId = '1'

    const wrapper = shallowMount(Sidebar, {
      props: { chats, selectedChatId }
    })

    const chatItems = wrapper.findAll('.chat-item')
    expect(chatItems).toHaveLength(chats.length)

    expect(chatItems[0].classes()).toContain('selected-chat')

    await chatItems[1].trigger('click')
    expect(wrapper.emitted('selectChat')).toBeTruthy()
    expect(wrapper.emitted('selectChat')[0]).toEqual([chats[1].id])
  })
})
