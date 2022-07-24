# React Lean Tabs

This contains unstyled react-tabs component

## API Props

| Syntax         | Type    | Description                                                                         |
| -------------- | ------- | ----------------------------------------------------------------------------------- |
| active         | number  | Title                                                                               |
| onActiveChange | func    | Text                                                                                |
| disabled       | boolean | If true, the component is disabled.                                                 |
| initialValue   | number  | You can provide your own value. Otherwise, we fallback to the child position index. |

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
