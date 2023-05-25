const input = document.getElementById("input");
const addButton =document.getElementById("add_btn");
const list = document.getElementById("list");

input.addEventListener("input", () => {
  addButton.disabled = input.value.trim() === "";
});

addButton.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const newItem = document.createElement("li");
    newItem.textContent = input.value;
    newItem.innerHTML += ` <button class="delete-btn">X</button>`;
    list.appendChild(newItem);
    input.value = "";
    addButton.disabled = true;
  }
});

list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const li = event.target.parentNode;
    li.parentNode.removeChild(li);
  }
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (input.value.trim() !== "") {
      addButton.click();
    }
  }
});
