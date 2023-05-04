import { createPinia } from "pinia";
import { render } from "@testing-library/vue";
import { expect, describe, it } from "vitest";
import Slider from "../../components/Slider.vue";

describe("Slider component", () => {
  let mockPinia;

  const setup = () => {
    mockPinia = createPinia();

    return render(Slider, {
      global: {
        plugins: [mockPinia],
      },
      props: {
        type: "levelOfDetail",
        name1: "Low",
        name2: "High",
      },
    });
  };

  it("Slider component renders with correct props", () => {
    const { getByText, getByRole } = setup()

    expect(getByText("Low")).toBeTruthy();
    expect(getByText("High")).toBeTruthy();
    expect(getByRole("slider", { labelText: "levelOfDetail" })).toBeTruthy();
  });
});
