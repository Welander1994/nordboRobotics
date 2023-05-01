import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Slider from "../Slider.vue";

describe("Slider component", () => {
  test("Slider exists", async () => {
    expect(Slider).toBeTruthy();
  });

  /*   test("Slider renders the range input with with props", () => {
      const wrapper = mount(Slider);
      const rangeInput = wrapper.find("input.slider__range");
      expect(rangeInput.exists()).toBeTruthy();
      expect(rangeInput.attributes("type")).toBe("range");
      expect(rangeInput.attributes("min")).toBe("0");
      expect(rangeInput.attributes("max")).toBe("5");
      expect(rangeInput.attributes("steps")).toBe("5");
    });
  
    test("Slider renders correct number of range lines", () => {
      const wrapper = mount(Slider);
      const rangeLines = wrapper.findAll(".slider__range-line");
      expect(rangeLines.length).expect(4);
    });
  
    test("Slider updates range input value when moved", async () => {
      const wrapper = mount(Slider);
      const rangeInput = wrapper.find("input.slider__range");
      rangeInput.setValue("4");
      await wrapper.vm.$nextTick();
      expect(rangeInput.element.value).toBe("4");
    }); */
});
