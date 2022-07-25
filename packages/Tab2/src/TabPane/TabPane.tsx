import clsx from "clsx";

import React, { HTMLAttributes, FC, ReactNode } from "react";

import styles from "./TabPane.module.scss";

export interface TabPaneProps extends HTMLAttributes<HTMLLIElement> {
	dataTest?: string;
	children: ReactNode;
	className?: string;
	contentClassName?: string;

	title: string;
	onClick?: () => void;
}

export const TabPane: FC<TabPaneProps> = ({
	dataTest = "ds-tab-pane",

	title,
	onClick,
	contentClassName,
	className,
	children,
	...props
}) => {
	return (
		<li
			data-test={dataTest}
			className={clsx(styles["tab-pane"])}
			onClick={onClick}
			{...props}
		>
			<div
				data-test={`${dataTest}-heading`}
				className={clsx(styles["tab-pane--heading"], className)}
			>
				{title}
			</div>

			<div
				className={clsx(styles["tab-pane--content"], contentClassName)}
			>
				{children}
			</div>
		</li>
	);
};
export default TabPane;
