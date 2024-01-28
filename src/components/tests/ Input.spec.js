import { shallowMount } from '@vue/test-utils'
import Input from '@/components/Input.vue'

describe('Input.vue', () => {
  it('renders input with correct type and placeholder', () => {
    const type = 'text'
    const placeholder = 'Enter Text'
    const wrapper = shallowMount(Input, {
      props: { type, placeholder }
    })

    const input = wrapper.find('input')
    expect(input.attributes('type')).toBe(type)
    expect(input.attributes('placeholder')).toBe(placeholder)
  })

  it('emits update:value event with input value', async () => {
    const wrapper = shallowMount(Input, {
      props: { type: 'text', placeholder: 'Enter Text' }
    })

    const input = wrapper.find('input')
    await input.setValue('Test Value')

    expect(wrapper.emitted('update:value')).toBeTruthy()
    expect(wrapper.emitted('update:value')[0]).toEqual(['Test Value'])
  })
})
