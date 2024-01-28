import { shallowMount } from '@vue/test-utils'
import ChatView from '@/views/ChatView.vue'
import { createTestingPinia } from '@pinia/testing'
import { createRouter, createWebHistory } from 'vue-router'

jest.mock('firebase/auth', () => {
  const onAuthStateChanged = jest.fn()
  const getAuth = jest.fn(() => ({}))
  const signOut = jest.fn()
  return { getAuth, onAuthStateChanged, signOut }
})

jest.mock('@/components/Sidebar.vue', () => ({
  name: 'Sidebar',
  template: '<div></div>'
}))

jest.mock('@/components/ChatBox.vue', () => ({
  name: 'ChatBox',
  template: '<div></div>'
}))

describe('ChatView.vue', () => {
  const routes = []
  const router = createRouter({
    history: createWebHistory(),
    routes
  })

  const createWrapper = () => {
    const pinia = createTestingPinia()
    router.push = jest.fn()
    return shallowMount(ChatView, {
      global: {
        plugins: [pinia, router]
      }
    })
  }

  it('renders correctly', () => {
    const wrapper = createWrapper()
    expect(wrapper.exists()).toBe(true)
  })

  it('calls logout method on button click', async () => {
    const wrapper = createWrapper()
    window.confirm = jest.fn().mockReturnValue(true)
    await wrapper.find('button').trigger('click')
    expect(router.push).toHaveBeenCalledWith('/login')
  })
})
