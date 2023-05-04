import { expect, describe, it } from "vitest";
import { mount } from "@vue/test-utils";
import Header from '@/components/Header.vue';

describe('Header', () => {
    it('renders correctly', () => {
    const wrapper = mount(Header);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('toggles mobile menu visibility', async () => {
    const wrapper = mount(Header);
    const hamburgerIcon = wrapper.find('.menu-icon');

    expect(wrapper.find('.mainheader__mobile').classes()).not.toContain('active');

    await hamburgerIcon.trigger('click');

    expect(wrapper.find('.mainheader__mobile').classes()).toContain('active');
  });

  it('toggles hamburger icon active state', async () => {
    const wrapper = mount(Header);
    const hamburgerIcon = wrapper.find('.menu-icon');

    expect(hamburgerIcon.classes()).not.toContain('active');

    await hamburgerIcon.trigger('click');

    expect(hamburgerIcon.classes()).toContain('active');
  });
});
