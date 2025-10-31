let inputValue = document.querySelector(".input-fild");
let addBtn = document.querySelector(".add-btn");
let containerDiv = document.querySelector(".main-container");

addBtn.addEventListener("click", () => {
  if (inputValue.value === "") {
    alert("Please Enter Your Task");
  } else {
    let parentDiv = document.createElement("div");
    parentDiv.className = "newDiv";
    containerDiv.appendChild(parentDiv);

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "checkBox";
    parentDiv.appendChild(checkBox);

    let childDiv = document.createElement("div");
    childDiv.className = "childDiv";
    let paraghaphTag = document.createElement("p");
    paraghaphTag.className = "paraTag";
    paraghaphTag.innerText = inputValue.value;
    childDiv.appendChild(paraghaphTag);
    parentDiv.appendChild(childDiv);

    let deleteBtn = document.createElement("button");

    deleteBtn.className = "deleteBtn";
    parentDiv.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      parentDiv.style.display = "none";
    });

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "deleteIcon";
    deleteIcon.classList.add("fa-solid", "fa-trash");

    deleteBtn.appendChild(deleteIcon);
    inputValue.value = "";
  }
});
