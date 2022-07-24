import React, {
	Children,
	useState,
	useCallback,
	HTMLAttributes,
	FC,
	ReactElement
} from "react";

import clsx from "clsx";

import { TabPane, TabPaneProps } from "./TabPane";

import styles from "./Tab.module.scss";

export interface BaseProps extends HTMLAttributes<HTMLUListElement> {
	dataTest?: string;
	className?: string;
	children: ReactElement<TabPaneProps>[];
}

type ControlledProps = BaseProps & {
	onActiveChange?: (value: number) => void;
	active?: number;
	initialActive?: never;
};
type UncontrolledProps = BaseProps & {
	onActiveChange?: never;
	active?: never;
	initialActive?: number;
};

type Props = ControlledProps | UncontrolledProps;

export type TabProps = FC<Props> & { Pane: typeof TabPane };

export const wrongChildTypeError = (child: React.ReactElement) =>
	`<Tab> component only accepts children of type <Tab.Pane>,try wrapping your <${
		typeof child.type !== "string" ? child.type.name : "components"
	} /> with a <Tab.Pane>`;

export const wrongInitialActiveError =
	"Out of bound: initialActive value should not exceed provided TabPanes";

export const Tab: TabProps = ({
	dataTest = "ds-tab",

	className,
	initialActive,
	onActiveChange,
	active,
	children,
	...props
}) => {
	const defaultValue = active || 0;
	const [activeValue, setActiveValue] = useState<number>(
		initialActive ?? defaultValue
	);

	const count = Children.count(children);
	if (activeValue > count) throw new Error(wrongInitialActiveError);

	const handleClick = useCallback(
		(active: number) => {
			setActiveValue(active);
			if (onActiveChange) {
				return onActiveChange(active);
			}
		},
		[onActiveChange]
	);

	return (
		<ul
			className={clsx(styles.tab, className)}
			data-test={dataTest}
			tabIndex={activeValue ? 0 : -1}
			{...props}
		>
			{Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					if (child.type === TabPane) {
						return React.cloneElement(child, {
							className: styles["tab-row"],
							key: index,
							active: activeValue === index,
							onClick: () => handleClick(index)
						});
					}

					throw new Error(wrongChildTypeError(child));
				}

				return child;
			})}
		</ul>
	);
};

Tab.Pane = TabPane;
export default Tab;
