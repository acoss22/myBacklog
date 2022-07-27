function Category(category, items ) {
    category, 
    items
}

function Add(){
    var inputText = document.getElementById("category");
    console.log("inputText ", inputText.value);

    const categ1 = new Category(inputText.value, []);
    console.log(categ1.category);

    document.getElementById("category-item").innerHTML = categ1.category;
    
    var categs = new Category(categ1);

    for(let i = 0; i<categs.length; i++) {
        console.log(categs[i]);
    }
  
}
