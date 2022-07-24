import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import userEvent from "@testing-library/user-event";

import Tab from "./Tab2";

describe("<Tab/>", () => {
	expect.extend(toHaveNoViolations);

	test("Should not fail any accessibility tests", async () => {
		const { container } = render(
			<Tab>
				<Tab.Pane title="first">content first pane</Tab.Pane>
				<Tab.Pane title="second">content second pane</Tab.Pane>
				<Tab.Pane title="third">content third pane</Tab.Pane>
			</Tab>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it("fires `onTabChange` events", async () => {
		const mockOnTabChange = jest.fn();

		render(
			<div>
				<Tab onActiveChange={mockOnTabChange}>
					<Tab.Pane title="first">content first pane</Tab.Pane>
					<Tab.Pane title="second">content second pane</Tab.Pane>
					<Tab.Pane title="third">content third pane</Tab.Pane>
				</Tab>
			</div>
		);

		await userEvent.click(screen.getAllByRole("listitem")[1]);
		expect(mockOnTabChange).toHaveBeenCalled();
	});
});
