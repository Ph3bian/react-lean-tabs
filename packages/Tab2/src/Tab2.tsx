import React,{ HTMLAttributes, FC, Children, useState, useCallback } from "react";
import clsx from "clsx";

import { TabPane } from "./TabPane";

import styles from "./Tab2.module.scss";

export interface TabProps extends HTMLAttributes<HTMLUListElement> {
	dataTest?: string;
	className?: string;

	onActiveChange?: (value: number) => void;
}

export const wrongChildTypeError = (child: React.ReactElement) =>
	`<Tab> component only accepts children of type <Tab.Pane>,try wrapping your <${
		typeof child.type !== "string" ? child.type.name : "components"
	} /> with a <Tab.Pane>`;

export const Tab2: FC<TabProps> & { Pane: typeof TabPane }  = ({
	children,
	className,
	dataTest = "ds-tab",

	onActiveChange,
	...props
}) => {
	const [active, setActive] = useState<number>(0);
	const handleClick = useCallback(
		(active: number) => {
			setActive(active);
			if (onActiveChange) {
				return onActiveChange(active);
			}
		},
		[onActiveChange]
	);

	return (
		<ul
		role="list"
			className={clsx(styles.tab, className)}
			data-test={dataTest}
			tabIndex={active ? 0 : -1}
			{...props}
		>
			{Children.map(children, (child, index) => {
				if (React.isValidElement(child)) {
					if (child.type === TabPane) {
						return React.cloneElement(child, {
							className: styles["tab-row"],
							key: index,
							active: active === index,
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

Tab2.Pane = TabPane;
export default Tab2;
