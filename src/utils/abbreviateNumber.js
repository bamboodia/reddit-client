/* eslint-disable default-case */
function abbreviate(number, maxPlaces, forcePlaces, forceLetter) {
	number = Number(number);
	forceLetter = forceLetter || false;
	if (forceLetter !== false) {
		return annotate(number, maxPlaces, forcePlaces, forceLetter);
	}
	var abbr;
	if (number >= 1e12) {
		abbr = "t";
	} else if (number >= 1e9) {
		abbr = "b";
	} else if (number >= 1e6) {
		abbr = "m";
	} else if (number >= 1e3) {
		abbr = "k";
	} else {
		abbr = "";
	}
	return annotate(number, maxPlaces, forcePlaces, abbr);
}

function annotate(number, maxPlaces, forcePlaces, abbr) {
	// set places to false to not round
	var rounded = 0;
	switch (abbr) {
		case "t":
			rounded = number / 1e12;
			break;
		case "b":
			rounded = number / 1e9;
			break;
		case "m":
			rounded = number / 1e6;
			break;
		case "k":
			rounded = number / 1e3;
			break;
		case "":
			rounded = number;
			break;
	}
	if (maxPlaces !== false) {
		var test = new RegExp("\\.\\d{" + (maxPlaces + 1) + ",}$");
		if (test.test("" + rounded)) {
			rounded = rounded.toFixed(maxPlaces);
		}
	}
	if (forcePlaces !== false) {
		rounded = Number(rounded).toFixed(forcePlaces);
	}
	return rounded + abbr;
}

abbreviate(1200000, 2, false, false);
abbreviate(1248000, 2, false, false);
abbreviate(248000, 2, false, false);

abbreviate(1200000, 2, 2, false);
abbreviate(1248000, 2, 2, false);
abbreviate(248000, 2, 2, false);

abbreviate(1200000, 3, 3, "M");
abbreviate(1248000, 3, 3, "M");
abbreviate(248000, 3, 3, "M");
export default abbreviate