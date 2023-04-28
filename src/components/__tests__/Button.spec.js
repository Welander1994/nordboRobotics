import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "../Button.vue";

describe("Button component", () => {
  test("Component exists", async () => {
    expect(Button).toBeTruthy();
  });

  test("Renders button name", async () => {
    const wrapper = mount(Button, {
      props: {
        name: "Button name",
      },
    });
    expect(wrapper.text()).toContain("Button name");
  });

  test("Changes image url on hover", async () => {
    const wrapper = mount(Button, {
      props: {
        name: "Button name",
        imgUrl: "/original-image-url.png",
        hoverImgUrl: "/hover-image-url.png",
      },
    });

    await wrapper.trigger("mouseover");
    expect(wrapper.find(".button__img").attributes("src")).toBe(
      "/hover-image-url.png"
    );

    await wrapper.trigger("mouseleave");
    expect(wrapper.find(".button__img").attributes("src")).toBe(
      "/original-image-url.png"
    );
  });

  test("add class on click", async () => {
    const wrapper = mount(Button, {
      props: {
        name: "Button name",
        selectedClass: "new-class",
      },
    });

/*     expect(wrapper.classes()).not.toContain("new-class");

    await wrapper.trigger("click");
    expect(wrapper.classes()).toContain("new-class");

    await wrapper.trigger("click");
    expect(wrapper.classes()).not.toContain("new-class"); */
  });
});
