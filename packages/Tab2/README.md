# Tabs

Tabs

## API Props

| Syntax         | Type   | Description                  |
| -------------- | ------ | ---------------------------- |
| onActiveChange | func   | Text                         |
| className      | string | You can provide your classes |

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
