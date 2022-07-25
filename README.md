# React Lean Tabs

This contains unstyled react-tabs component, there are 2 variant of tabs for use

-   react-lean-tab
-   react-lean-tab2

## Getting started

For react-lean-tab

`yarn add react-lean-tab` to install package

### React-lean-tab: API Props

| Syntax         | Type   | Description                                                                         |
| -------------- | ------ | ----------------------------------------------------------------------------------- |
| active         | number | Title                                                                               |
| onActiveChange | func   | Text                                                                                |
| initialValue   | number | You can provide your own value. Otherwise, we fallback to the child position index. |
| className      | string | You can provide your own classes                                                    |

#### Usage

```tsx
import { Tab } from "react-lean-tab";

const App = () => {
	return (
		<Tab>
			<Tab.Pane title="First Pane">First Pane Body</Tab.Pane>
			<Tab.Pane title="Second Pane">Second Pane Body</Tab.Pane>
		</Tab>
	);
};
```

#### Uncontrolled

```tsx
import { Tab } from "react-lean-tab";

const App = () => {
	return (
		<Tab initialActive={0}>
			<Tab.Pane title="A">...</Tab.Pane>
			<Tab.Pane title="B">...</Tab.Pane>
		</Tab>
	);
};
```

#### Controlled

```tsx
import { Tab } from "react-lean-tab";

const App = () => {
	return (
		<Tab active={active} onActiveChange={onActiveChange}>
			<Tab.Pane title="A">...</Tab.Pane>
			<Tab.Pane title="B">...</Tab.Pane>
		</Tab>
	);
};
```

## React-lean-tab2: API Props

For react-lean-tab2

`yarn add react-lean-tab2` to install package

| Syntax         | Type   | Description                      |
| -------------- | ------ | -------------------------------- |
| onActiveChange | func   | Text                             |
| className      | string | You can provide your own classes |

#### Usage

```tsx
import { Tab2 } from "react-lean-tab2";

const App = () => {
	return (
		<Tab>
			<Tab.Pane title="First Pane">First Pane Body</Tab.Pane>
			<Tab.Pane title="Second Pane">Second Pane Body</Tab.Pane>
		</Tab>
	);
};
```

```tsx
import { Tab2 } from "react-lean-tab2";

const App = () => {
	return (
		<Tab2 onActiveChange={onActiveChange}>
			<Tab2.Pane title="A">...</Tab2.Pane>
			<Tab2.Pane title="B">...</Tab2.Pane>
		</Tab2>
	);
};
```
