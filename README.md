# React Lean Tabs

This contains unstyled react-tabs component, there are 2 variant of tabs for use

-   react-lean-tab
-   react-lean-tab2

## Getting started

For react-lean-tab

`yarn add react-lean-tab` to install package

### React-lean-tab: API Props

| Syntax         | Type    | Description                                                                         |
| -------------- | ------- | ----------------------------------------------------------------------------------- |
| active         | number  | Title                                                                               |
| onActiveChange | func    | Text                                                                                |
| disabled       | boolean | If true, the component is disabled.                                                 |
| initialValue   | number  | You can provide your own value. Otherwise, we fallback to the child position index. |
| className      | string  | You can provide your own classes                                                    |

#### Usage

```tsx
<Tab>
	<Tab.Pane title="First Pane">First Pane Body</Tab.Pane>
	<Tab.Pane title="Second Pane">Second Pane Body</Tab.Pane>
</Tab>
```

#### Uncontrolled

```tsx
<Tab initialActive={0}>
	<Tab.Pane title="A">...</Tab.Pane>
	<Tab.Pane title="B">...</Tab.Pane>
</Tab>
```

#### Controlled

```tsx
<Tab active={active} onActiveChange={onActiveChange}>
	<Tab.Pane title="A">...</Tab.Pane>
	<Tab.Pane title="B">...</Tab.Pane>
</Tab>
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
<Tab>
	<Tab.Pane title="First Pane">First Pane Body</Tab.Pane>
	<Tab.Pane title="Second Pane">Second Pane Body</Tab.Pane>
</Tab>
```

```tsx
<Tab onActiveChange={onActiveChange}>
	<Tab.Pane title="A">...</Tab.Pane>
	<Tab.Pane title="B">...</Tab.Pane>
</Tab>
```
