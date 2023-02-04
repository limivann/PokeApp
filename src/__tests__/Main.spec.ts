import { mount } from "@vue/test-utils";
import Main from "../components/Main.vue";

describe("Main component", () => {
	it("renders the component and matches snapshot", () => {
		const wrapper = mount(Main);
		expect(wrapper.element).toMatchSnapshot();
	});

	it("should render the heading", () => {
		const wrapper = mount(Main);
		expect(wrapper.find("h1").text()).toEqual("PokeApp");
	});
});
