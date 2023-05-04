import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "../Button.vue";

describe("Button component", () => {
  it("Component exists", async () => {
    expect(Button).toBeTruthy();
  });

  it("Renders button name", async () => {
    const wrapper = mount(Button, {
      props: {
        name: "Button name",
      },
    });
    expect(wrapper.text()).toContain("Button name");
  });

  it("Changes image url on hover", async () => {
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

  it("Returns imgUrl when isHovering is false", async () => {
    const wrapper = mount(Button, {
      props: {
        name: "Button name",
        imgUrl: "/original-image-url.png",
        hoverImgUrl: "/hover-image-url.png",
      },
    });

    expect(wrapper.vm.imgUrl).toBe("/original-image-url.png");
  });

  it("Returns hoverImgUrl when isSelected is true", async () => {
    const wrapper = mount(Button, {
      props: {
        name: "Button name",
        imgUrl: "/original-image-url.png",
        hoverImgUrl: "/hover-image-url.png",
        isSelected: true,
      },
    });

    expect(wrapper.vm.imgUrl).toBe("/hover-image-url.png");
  });
});
