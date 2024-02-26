function render({ model, el }) {
  let getCount = () => model.get("count");
  let button = document.createElement("button");
  button.classList.add("counter-button");
  button.innerHTML = `count is ${getCount()}`;
  button.addEventListener("click", () => {
    model.set("count", getCount() + 1);
    model.save_changes();
  });
  model.on("change:count", () => {
    button.innerHTML = `count is ${getCount()}`;
  });
  el.appendChild(button);
}

export default { render };
