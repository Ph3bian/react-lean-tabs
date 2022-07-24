module.exports = {
	testMatch: ["**/+(*.)+(spec|test).+(ts|js)?(x)"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
	transform: {
		"^.+\\.tsx?$": "ts-jest",
		"^.+\\.(js|jsx)$": "babel-jest"
	},
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["./setupTests.ts"],
	moduleNameMapper: {
		"^.+\\.(css|scss)$": "babel-jest"
	}
};
