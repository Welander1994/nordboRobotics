import { describe, it, test, expect } from "vitest";

import { mount } from "@vue/test-utils";
import aside from '@/components/aside.vue'


describe('aside', () => {
    const wrapper = mount(aside);

    test("Component exists", async () => {
        expect(aside).toBeTruthy();
    }),

        test("Check is selected", async () => {
            const navItems = wrapper.findAll('.formnav__link');
            expect(navItems[0].classes()).toContain('selected');
            expect(navItems[1].classes()).not.toContain('selected');
            // simulate a click on the second navigation item
            await navItems[1].trigger('click');
            expect(navItems[0].classes()).not.toContain('selected');
            expect(navItems[1].classes()).toContain('selected');
        }),

        test("Check only one active", async () => {
            const navItems = wrapper.findAll('.selected');
            expect(navItems.length).toBe(1);
        }),

        test("btn_burger", async () => {
            // Define a test case
            it('should toggle the value of asideShow', () => {
                // Set up any necessary test data or environment
                const asideShow = { value: false };

                // Call the function to be tested
                btn_burger();

                // Assert the expected outcome
                expect(asideShow.value).toBe(true); // or any other appropriate assertion
            });

        })


});