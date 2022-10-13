
function newItem() {

	// javascript
	//1. Adding a new item to the list of items:
	// let li = document.createElement("li");
	// let inputValue = document.getElementById("input").value;
	// let text = document.createTextNode(inputValue);
	// li.appendChild(text);

	const inputValue = $("#input").val();
	const liEl = $("<li></li>");
	liEl.append(inputValue);

	if (inputValue === "") {
		alert("You must write something!");
	} else {
		// let list = document.querySelector('#list');
		// list.appendChild(li);
		$("#list").append(liEl);
	}

	//2. Crossing out an item from the list of items:
	function crossOut() {
		// li.classList.toggle("strike");
		liEl.toggleClass("strike");
	}

	// li.addEventListener("dblclick", crossOut);
	liEl.on("dblclick", crossOut);

	//3(i). Adding the delete button "X":
	// let crossOutButton = document.createElement("crossOutButton");
	// crossOutButton.appendChild(document.createTextNode("X"));
	// li.appendChild(crossOutButton);
	const crossOutButtonEl = $("<crossOutButton></crossOutButton>");
	crossOutButtonEl.append("X");
	liEl.append(crossOutButtonEl);

	// crossOutButton.addEventListener("click", deleteListItem);
	crossOutButtonEl.on("click", deleteListItem);

	//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
	function deleteListItem() {
		// li.classList.add("delete");
		liEl.addClass("delete");
	}
	// 4. Reordering the items:
	$("#list").sortable();
}










