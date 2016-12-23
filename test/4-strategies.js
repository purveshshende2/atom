"use strict";

describe("Match strategies", () => {
	require("./utils/atom-specs.js");
	
	before("Activate packages", () => {
		atom.project.setPaths([resolvePath("fixtures/strategies")]);
		
		return chain([
			() => atom.themes.activateThemes(),
			() => atom.packages.activatePackage("file-icons"),
			() => atom.packages.activatePackage("tree-view"),
			() => atom.packages.activatePackage("tabs"),
			() => atom.packages.activatePackage("fuzzy-finder"),
			() => atom.packages.activatePackage("archive-view"),
			() => setTheme("atom-dark")
		]);
	});
	
	// require("./4.1-path.js");
	require("./4.2-usertype.js");
});