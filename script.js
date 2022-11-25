




function checkboxToggler(id, selector) {
	const checkbox = document.getElementById(id);
	const element = document.querySelector(selector);
	element.style.visibility = "hidden";
	checkbox.addEventListener("change", e => {
	  const checked = e.target.checked;
	  element.style.visibility = checked ? "visible" : "hidden";
	});
  }
  checkboxToggler("chkddl", "#box26");
checkboxToggler("check4", ".box27");

function checkboxToggle(id, selector) {
	const checkbox = document.getElementById(id);
	const element = document.querySelector(selector);
	element.style.display = "none";
	checkbox.addEventListener("change", e => {
	  const checked = e.target.checked;
	  element.style.display = checked ? "grid" : "none";
	});
  }

checkboxToggle("dd-every-day","#dd-every-day-content");
checkboxToggle("dd-every-week","#dd-every-checkbox");
checkboxToggle("dd-every-month","#dd-every-checkbox1");
checkboxToggle("dd-every-year","#dd-every-checkbox2");
checkboxToggle("dd-custom-day","#dd-every-checkbox3");
checkboxToggle("dd-custom-day","#dd-every-checkbox4");
checkboxToggle("dd-custom-day","#dd-every-checkbox6");
checkboxToggle("dd-custom-day","#dd-every-checkbox7");
checkboxToggle("dd-custom-day","#dd-every-checkbox8");
checkboxToggle("dd-custom-day","#dd-every-checkbox9");
checkboxToggle("dd-custom-day","#dd-every-checkbox10");
checkboxToggle("dd-custom-only","#calendar1");
checkboxToggle("dd-every-checkbox4","#dd-every-checkbox5");


checkboxToggle("dd-every-checkbox","#dd-every-day-content1");
checkboxToggle("dd-every-checkbox1","#dd-every-day-content2");
checkboxToggle("dd-every-checkbox2","#dd-every-day-content3");
checkboxToggle("dd-every-checkbox3","#dd-every-day-content4");
checkboxToggle("dd-every-day-content4","#dd-every-day-content5");
checkboxToggle("dd-every-checkbox5","#dd-every-day-content6");
// checkboxToggle("dd-every-checkbox6","#dd-every-day-content7");
// checkboxToggle("dd-every-checkbox7","#dd-every-day-content8");
// checkboxToggle("dd-every-checkbox8","#dd-every-day-content9");
// checkboxToggle("dd-every-checkbox9","#dd-every-day-content10");
// checkboxToggle("dd-every-checkbox10","#dd-every-day-content11");
checkboxToggle("dd-custom-only","#dd-every-day-content12");
checkboxToggle("dd-every-checkbox6","#my-select");
checkboxToggle("dd-every-checkbox7","#my-select1");
checkboxToggle("dd-every-checkbox8","#my-select2");
checkboxToggle("dd-every-checkbox9","#my-select3");
checkboxToggle("dd-every-checkbox10","#my-select4");

 


function selectToggler(id, selector) {
	const select = document.getElementById(id);
	const element = document.querySelector(selector);
	element.style.visibility = "hidden";
	select.addEventListener("change", e => {
	  const selected = e.target.value !== "default";
	  element.style.visibility = selected ? "visible" : "hidden";
	});
  }




  const dropdowns = document.querySelectorAll(".customdd");
  dropdowns.forEach(dropdown => {
	dropdown.querySelector(".customdd-button")
	  .addEventListener("click", e => {
		const content = dropdown.querySelector(".customdd-content");
		content.classList.toggle("hidden");
	  });
  });

  const mySelect = document.querySelector("#my-select");
  for (let i = 0; i < 365; i++) {
	mySelect.appendChild(createOptionElement(i + 1));
  }
  
  function createOptionElement(value, textContent=value) {
	const option = document.createElement("option");
	option.value = value;
	option.textContent = textContent;
	return option;
  }
 
