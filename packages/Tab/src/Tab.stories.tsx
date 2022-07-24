import React, { useState } from "react";
import { useArgs } from "@storybook/client-api";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tab from "./Tab";

export default {
	title: "Tabs/Tab",
	component: Tab,
	parameters: {
		layout: "fullscreen"
	}
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => (
	<Tab {...args}>
		<Tab.Pane title="Whatsapp"> Hello Tab Pane 0</Tab.Pane>
		<Tab.Pane title="Telegram"> Hello Tab Pane 1</Tab.Pane>
	</Tab>
);
export const TabsComponent = Template.bind({});
TabsComponent.args = {};
export const UncontrolledTab: ComponentStory<typeof Tab> = (args) => {
	return (
		<Tab initialActive={args.initialActive}>
			<Tab.Pane title="first">content first tab</Tab.Pane>
			<Tab.Pane title="second">content second tab</Tab.Pane>
			<Tab.Pane title="third">content third tab</Tab.Pane>
		</Tab>
	);
};
UncontrolledTab.args = {
	initialActive: 0
};

export const ControlledTab: ComponentStory<typeof Tab> = (args) => {
	const [_, updateArgs] = useArgs();
	const [selectedValue, setSelectedValue] = useState(args.active);

	const onActiveChange = (value: number) => {
		setSelectedValue(value);
		const val = args.active;
		updateArgs({ ...args, checked: val === value });
		return;
	};

	return (
		<Tab active={selectedValue} onActiveChange={onActiveChange}>
			<Tab.Pane title="A">.1..</Tab.Pane>
			<Tab.Pane title="B">.5..</Tab.Pane>
		</Tab>
	);
};

ControlledTab.args = {
	active: 0
};
