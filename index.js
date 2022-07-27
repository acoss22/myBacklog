function Category(category, items) {
  category, items;
}

var myNodelist = document.getElementsByTagName("li");

    // Create a new list item when clicking on the "Add" button
function Add() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("category").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

  var inputText = document.getElementById("category");
  console.log("inputText ", inputText.value);

  const categ1 = new Category(inputText.value, []);

  console.log(categ1.category);

  var categs = new Category(categ1);



