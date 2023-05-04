
import { expect, describe, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Information from 'src/components/Information.vue';

// This is a test suite
describe('Information.vue', () => {
  it('Renders the component correctly', () => {
    const lists = [
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' },
    ];
    const wrapper = mount(Information, {
      props: { lists },
    });

    expect(wrapper.find('.form__subtitle').text()).toBe('Information');
    expect(wrapper.findAll('li').length).toBe(lists.length);
  });

  it('Applies dark mode when the dark prop is true', () => {
    const lists = [
      { id: 1, text: 'Item 1' },
      { id: 2, text: 'Item 2' },
    ];
    const wrapper = mount(Information, {
      props: { lists, dark: true },
    });

    expect(wrapper.find('.form__content').classes()).toContain('dark');
  });
});