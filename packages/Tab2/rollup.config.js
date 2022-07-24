import sass from "rollup-plugin-sass";
import typescript from "rollup-plugin-typescript2";

export default {
	input: ["src/index.ts"],
	output: [
		{
			dir: "dist",
			entryFileNames: "[name].js",
			format: "cjs",
			exports: "named"
		}
	],
	plugins: [sass({ insert: true }), typescript()],
	external: ["react"]
};
