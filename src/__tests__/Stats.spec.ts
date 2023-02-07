import { mount } from "@vue/test-utils";
import Stats from "../components/Stats.vue";
import { IStatData } from "../interfaces";

describe("Stats component", () => {
	const statsData: IStatData = {
		hp: 60,
		attack: 45,
		defense: 50,
		spAtk: 90,
		spDef: 80,
		speed: 70,
	};

	it("should render correct elements", () => {
		const wrapper = mount(Stats);
		expect(wrapper.find(".statsTable").exists()).toBe(true);
	});

	it("updates the component when props are passed", async () => {
		const wrapper = mount(Stats);
		await wrapper.setProps({ stats: statsData });
		expect(wrapper.find(".hp td:nth-child(2)").text()).toEqual("60");
		expect(wrapper.find(".attack td:nth-child(2)").text()).toEqual("45");
		expect(wrapper.find(".defense td:nth-child(2)").text()).toEqual("50");
		expect(wrapper.find(".specialAttack td:nth-child(2)").text()).toEqual("90");
		expect(wrapper.find(".specialDefense td:nth-child(2)").text()).toEqual(
			"80"
		);
		expect(wrapper.find(".speed td:nth-child(2)").text()).toEqual("70");
	});
});
