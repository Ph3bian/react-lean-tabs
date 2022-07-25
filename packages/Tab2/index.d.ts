declare module "*.scss" {
	const content: { [className: string]: string };
	export = content;
}

declare module "*.svg" {
	/**
	 * A React Component cotaining the SVG. Any props will be passed to the SVG.
	 */
	const Component: React.FunctionComponent<Record<string, any>>;
	export default Component;
}

declare module "*.svg?url" {
	export { default as default } from "*.png";
}

declare module "*.png" {
	/**
	 * A string containing a Base64 encoded data url of the image.
	 */
	const url: string;
	export default url;
}

declare module "*.jpg" {
	export { default as default } from "*.png";
}

declare module "*.jpeg" {
	export { default as default } from "*.png";
}