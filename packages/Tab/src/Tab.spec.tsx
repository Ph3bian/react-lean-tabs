import { render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import userEvent from "@testing-library/user-event";

import Tab, { TabProps } from "./Tab";

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

	describe("Controlled <Tab/>", () => {
		const mockProps = {
			onActiveChange: jest.fn(),
			className: "tabs",
			active: 0,
			dataTest: "tabs"
		};
		const renderComponent = () =>
			render(
				<Tab {...mockProps}>
					<Tab.Pane title="first">content first pane</Tab.Pane>
					<Tab.Pane title="second">content second pane</Tab.Pane>
					<Tab.Pane title="third">content third pane</Tab.Pane>
				</Tab>
			);

		it("should render successfully", async () => {
			const { baseElement } = renderComponent();

			expect(baseElement).toBeTruthy();
		});
		it("should handle `onActiveChange` event", async () => {
			renderComponent();

			await userEvent.click(screen.getAllByRole("listitem")[1]);

			expect(mockProps.onActiveChange).toHaveBeenCalled();
		});
		it("should handle composing classNames", async () => {
			renderComponent();

			expect(screen.getByTestId("tabs")).toHaveClass(mockProps.className);
		});
	});
});
