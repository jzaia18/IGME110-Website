//Copy a given message to the user's clipboard
function copyToClipboard(message) {
  console.log(message); //for temp debugging

  if (!message)
    return;
  var textElement = document.createElement("textarea");
  textElement.value = message;
  document.body.appendChild(textElement);
  textElement.select();
  document.execCommand("copy");
  document.body.removeChild(textElement);
}


//Add event listeners to click icons such that a click will copy the appropriate information
var refList = $(".references-list");
for (var i = 0; i < refList.length; i++) {
  for (var j = 0; j < refList[i].children.length; j++) {
    refList[i].children[j].addEventListener("click",
                                            function(e) {
                                              console.log(e.target.title); //for temp debugging
                                              if (e.target.title)
                                                copyToClipboard(e.target.title);
                                            });
  }
}
