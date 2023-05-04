import { expect, describe, it } from "vitest";
import { mount } from "@vue/test-utils";
import Information from "src/components/Information.vue";

describe("Information.vue", () => {
  it("Renders the component correctly", () => {
    const lists = [
      { id: 1, text: "Item 1" },
      { id: 2, text: "Item 2" },
    ];
    const wrapper = mount(Information, {
      props: { lists },
    });

    expect(wrapper.find(".form__subtitle").text()).toBe("Information");
    expect(wrapper.findAll("li").length).toBe(lists.length);
  });

  it("Applies dark mode when the dark prop is true", () => {
    const lists = [
      { id: 1, text: "Item 1" },
      { id: 2, text: "Item 2" },
    ];
    const wrapper = mount(Information, {
      props: { lists, dark: true },
    });

    expect(wrapper.find(".form__content").classes()).toContain("dark");
  });

  it("Renders text when the text prop is provided", () => {
    const text = "Some text";
    const wrapper = mount(Information, {
      props: { text },
    });

    expect(wrapper.find("li").text()).toBe(text);
  });

  it("Renders both lists and text when both props are provided", () => {
    const lists = [
      { id: 1, text: "Item 1" },
      { id: 2, text: "Item 2" },
    ];
    const text = "Some text";
    const wrapper = mount(Information, {
      props: { lists, text },
    });

    expect(wrapper.findAll("li").length).toBe(lists.length + 1);
    expect(wrapper.find("li:last-child").text()).toBe(text);
  });

  it("Renders nothing when lists prop is an empty array", () => {
    const lists = [];
    const wrapper = mount(Information, {
      props: { lists },
    });

    expect(wrapper.findAll("li").length).toBe(0);
  });

  it("Renders nothing when lists prop is not provided", () => {
    const wrapper = mount(Information);

    expect(wrapper.findAll("li").length).toBe(0);
  });
});
