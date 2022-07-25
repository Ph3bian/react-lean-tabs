# Tabs

## Getting started

`yarn add react-lean-tab2`

### API Props

| Syntax         | Type   | Description                  |
| -------------- | ------ | ---------------------------- |
| onActiveChange | func   | Text                         |
| className      | string | You can provide your classes |

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
