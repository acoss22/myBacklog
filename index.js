var myNodelist = document.getElementsByTagName("li");

function Add() {
    var categoryToAdd = document.getElementById("category").value;
    if(categoryToAdd === ""){
        alert("You must write something!");
        return;
    }

    var itemsToAdd = [];
    let categoryAdded = addCategory(categoryToAdd, itemsToAdd);

    if(categoryAdded != null){
        var li = document.createElement("li");
        var t = document.createTextNode(categoryAdded.name);
        li.appendChild(t);
        
        document.getElementById("myUL").appendChild(li);
        document.getElementById("category").value = "";
      
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.appendChild(txt); //span with text
        li.appendChild(span); // add to li
    }

 
}

let categoryList = [
  { name: "Movies", items: [] },
  { name: "Books", items: [] },
  { name: "TV Shows", items: [] },
  { name: "Games", items: [] },
];

function addCategory(category, items) {
  for (let i = 0; i < categoryList.length; i++) {
    if (categoryList[i].name == category) {
      return null;
    }
  }
  let newItem = { name: category, items: items };
  categoryList.push({ name: category, items: items });
  return newItem;
}
