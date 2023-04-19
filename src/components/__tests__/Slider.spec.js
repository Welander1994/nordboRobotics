import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Slider from "../Slider.vue";

describe("Slider component", () => {
  test("Component exists", async () => {
    expect(Slider).toBeTruthy();
  });
});
