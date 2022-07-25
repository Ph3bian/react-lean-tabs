import postcss from "rollup-plugin-postcss";
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
	plugins: [
		postcss({
			extract: false,
			modules: true,
			use: ["sass"]
		}),
		typescript()
	],
	external: ["react"]
};
