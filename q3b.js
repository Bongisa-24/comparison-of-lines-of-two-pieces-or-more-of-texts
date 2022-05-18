window.onload = function() {
	document.getElementById("compare").onclick = compareClick;
};

function compareClick() {
	document.getElementById("differences").innerHTML = "";   // clear out previous items
	var expect = document.getElementById("expected").value.split("\n");
	var actual = document.getElementById("actual").value.split("\n");

	var differences = 0;
	for (var i = 0; i < Math.min(expect.length, actual.length); i++) {
		if (expect[i] != actual[i]) {
			differences++;
			appendLI("Line " + (i+1) + ":\n"
					+ "< " + expect[i] + "\n"
					+ "> " + actual[i] + "\n\n");
		}
	}
	if (expect.length != actual.length) {
		appendLI("Lengths differ: < " + expect.length + ", > " + actual.length);
	}

	if (differences > 0) {
		document.getElementById("differences").className = "diffs";
	} else {
		document.getElementById("differences").className = "nodiffs";
		appendLI("No differences found");
	}
}

// helper function to add one LI tag to the page
function appendLI(text) {
	var li = document.createElement("li");
	li.innerHTML = text;
	document.getElementById("differences").appendChild(li);
}
