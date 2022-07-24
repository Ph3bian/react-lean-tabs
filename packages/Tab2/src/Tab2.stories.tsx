import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tab from "./Tab2";

export default {
	title: "Tabs/Tab",
	component: Tab,
	parameters: {
		layout: "fullscreen"
	}
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = () => (
	<Tab >
		<Tab.Pane title="Whatsapp"> Hello Tab Pane 0</Tab.Pane>
		<Tab.Pane title="Telegram"> Hello Tab Pane 1</Tab.Pane>
	</Tab>
);
export const TabsComponent = Template.bind({});
TabsComponent.args = {};
export const UncontrolledTab: ComponentStory<typeof Tab> = () => {
	return (
		<Tab >
			<Tab.Pane title="first">content first tab</Tab.Pane>
			<Tab.Pane title="second">content second tab</Tab.Pane>
			<Tab.Pane title="third">content third tab</Tab.Pane>
		</Tab>
	);
};


