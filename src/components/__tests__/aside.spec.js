import { mount } from "@vue/test-utils";
import { expect, describe, it } from "vitest";
import { createPinia } from "pinia";
import Aside from "../Aside.vue";

describe("Aside component", () => {
  let mockPinia;

  const setup = () => {
    mockPinia = createPinia();

    return mount(Aside, {
      global: {
        plugins: [mockPinia],
      },
    });
  };

  it("renders the aside", () => {
    const wrapper = setup();

    expect(wrapper.find(".formnav").exists()).toBe(true);
  });
});
