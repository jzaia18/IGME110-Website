function copyToClipboard(message) {
  var textElement = document.createElement("textarea");
  textElement.value = message;
  document.body.appendChild(textElement);
  textElement.select();
  textElement.style.display = "none";
  document.execCommand("copy");
  document.body.removeChild(textElement);
}
