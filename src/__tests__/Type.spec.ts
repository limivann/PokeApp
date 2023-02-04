import { mount } from "@vue/test-utils";
import Type from "../components/Type.vue";

describe("Tyoe component", () => {
	it("should render correct elements", () => {
		const wrapper = mount(Type);
		expect(wrapper.find(".typeBox").exists()).toBe(true);
	});

	it("updates the component when props are passed", async () => {
		const wrapper = mount(Type);
		await wrapper.setProps({ typeText: "normal" });
		expect(wrapper.find(".typeBox").text()).toEqual("normal");
	});
});
