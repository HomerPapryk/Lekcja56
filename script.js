/**
 * @param {HTMLElement} node
 * @returns {HTMLElement}
 */
function colorizeElement(node) {
  node.classList.add("new-class");

  node.setAttribute("data-tag", node.tagName.toLowerCase());

  node.style.color = "#f1f1f1";
  node.style.fontSize = "12px";

  return node;
}

document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector("#test");
  if (element) {
    const modifiedElement = colorizeElement(element);
    console.log(modifiedElement);
  }
});
