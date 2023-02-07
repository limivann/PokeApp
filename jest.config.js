module.exports = {
	moduleFileExtensions: ["js", "ts", "json", "vue"],
	preset: "ts-jest",
	transform: {
		"^.+\\.(ts|tsx)?$": "ts-jest",
		"^.+\\.(js|jsx)$": "babel-jest",
		"^.+\\.vue$": "vue-jest",
		".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
			"jest-transform-stub",
	},
};
