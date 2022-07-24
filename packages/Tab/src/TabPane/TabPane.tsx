import clsx from "clsx";
import React, { HTMLAttributes, FC, ReactNode } from "react";

import styles from "./TabPane.module.scss";

export interface TabPaneProps extends HTMLAttributes<HTMLLIElement> {
	dataTest?: string;
	children: ReactNode;
	className?: string;
	active?: boolean;
	title: string;
	onClick?: () => void;
}

export const TabPane: FC<TabPaneProps> = ({
	dataTest = "ds-tab-pane",

	title,
	onClick,
	active,
	className,
	children,
	...props
}) => {
	return (
		<li
			data-test={dataTest}
			className={clsx(styles["tab-pane"], className)}
			onClick={onClick}
			{...props}
		>
			<div
				className={clsx(
					styles["tab-pane--heading"],
					active && styles["tab-pane--heading-active"]
				)}
			>
				{title}
			</div>
			{active && (
				<div className={styles["tab-pane--content"]}>{children}</div>
			)}
		</li>
	);
};
export default TabPane;
