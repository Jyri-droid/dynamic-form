// JavaScript for dynamic and accessible form

function validateInput(input) {
	if (input.value == "") {
	  alert("Please fill in this input");
	  return false;
	}
 }
 
 function validateForm(form) {
	 var inputs = form.getElementsByTagName("input");
	 for (i of inputs) {
		 if (i.type.toLowerCase() == "text" && i.value == "") {
			 alert("Please fill in the whole form");
			 return false;
		 }
	 }
 }
 
 function addInputByEnterKey(input) {
	 if(event.keyCode == 13) {
		 if (validateInput(input) !== false) {
			 addForm();
		 }
	 }
 }
 
 function createUniqueIds(formField) {
	 var forms = formField.getElementsByTagName("form");
	 for (j = 0; j < forms.length; j++) {
		 var inputs = forms[j].getElementsByTagName("input");
		 var labels = forms[j].getElementsByTagName("label");
		 for (k = 0; k < inputs.length; k++) {
			 inputs[k].id = inputs[k].name + j;
			 labels[k].setAttribute("for", inputs[k].name + j);
		 }
	 }
 }
 
 function showDelete() {
	 var forms = document.getElementById("formField").getElementsByTagName("form");
	 for (i of forms) {
		 var inputs = i.getElementsByTagName("input");
		 if (forms.length > 1) {
			 for (j of inputs) {
			 j.parentElement.style.display = "block";
			 }
		 } else {
			 inputs[inputs.length - 1].parentElement.style.display = "none";
		 }
	 }
 }
 
 function addForm() {
	 var lastForm = document.getElementById("formField").lastElementChild;
	 if (validateForm(lastForm) !== false) {
		 var forms = document.getElementById("formField").getElementsByTagName("form");
		 var formCopy = forms[0].cloneNode(true);
		 var inputs = formCopy.getElementsByTagName("input");
		 for (i of inputs) {
			 if (i.type.toLowerCase() == "text") {
				 i.value = "";
			 }
		 }
		 document.getElementById("formField").appendChild(formCopy);
		 showDelete();
		 createUniqueIds(document.getElementById("formField"));
	 }
 }
 
 function deleteForm(inputParent) {
	 var forms = document.getElementById("formField").getElementsByTagName("form");
	 if (forms.length > 1) {
		 inputParent.parentElement.remove();
	 }
	 showDelete();
	 createUniqueIds(document.getElementById("formField"));
 }
 
 function saveData() {
	 /* Find all forms from the form field */
	 var forms = document.getElementById("formField").getElementsByTagName("form");
	 var participants = [];
	 for ( i=0; i < forms.length; i++ ) {
		 /* Find all inputs inside a single form field */
		 participants[i]= [];
		 var inputs = forms[i].getElementsByTagName("input");
		 /* Browse through all the inputs */
		 for (j=0; j < inputs.length; j++ ) {
			 /* Check input's type is text & it's not empty */
			 if (inputs[j].type.toLowerCase() == "text" && inputs[j].value !== "") {
			 /* Save data */
				 participants[i].push(inputs[j].value);
			 }
		 }
	 }
	 showArray("savedData", participants);
 }
 
 function showArray(id, array) {
	 var showResult = document.getElementById(id);
	 showResult.style.display = "block";
	 showResult.innerHTML = "The data user has saved looks like this:";
	 for (i of array ) {
		 showResult.innerHTML += "<br>";
		 for (j of i) {
			 showResult.innerHTML += j + " ";
		 }
	 }
 }