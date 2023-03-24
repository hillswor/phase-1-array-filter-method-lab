function findMatching(array, name) {
	const match = array.filter((element) => {
		return element.toLowerCase() === name.toLowerCase();
	});
	return match;
}

function fuzzyMatch(array, name) {
	const match = array.filter((element) => {
		return (
			element.slice(0, 2).toLowerCase() === name.slice(0, 2).toLowerCase()
		);
	});
	return match;
}

function matchName(array, name) {
	const match = array.filter((element) => {
		return element.name === name;
	});
	return match;
}
