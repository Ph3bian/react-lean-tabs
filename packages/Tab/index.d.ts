declare module "*.scss" {
	const content: { [className: string]: string };
	export = content;
}

declare module "*.svg" {
	const Component: React.FunctionComponent<Record<string, any>>;
	export default Component;
}

declare module "*.svg?url" {
	export { default as default } from "*.png";
}

declare module "*.png" {
	const url: string;
	export default url;
}

declare module "*.jpg" {
	export { default as default } from "*.png";
}

declare module "*.jpeg" {
	export { default as default } from "*.png";
}