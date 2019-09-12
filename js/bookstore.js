var myarr;

fetch("https://api.myjson.com/bins/1h3vb3", {
  method: "GET",
  headers: {}
})
  .then(function(responce) {
    console.log(responce);
    return responce.json();
  })
  .then(function(print) {
    myarr = print.books;
    createBook(myarr, "display");
    searchEngine();
  })
  .catch(function(err) {
    console.log(err);
  });

function createBook(array, id) {
  var main = document.getElementById(id);
  for (var i = 0; i < array.length; i++) {
    //front of card
    let flipCard = document.createElement("div");
    flipCard.setAttribute("class", "flip-card");
    let flipCardInner = document.createElement("div");
    flipCardInner.setAttribute("class", "flip-card-inner");
    let flipCardFront = document.createElement("div");
    flipCardFront.setAttribute("class", "flip-card-front");
    let img = document.createElement("img");
    //img//
    img.setAttribute("src", array[i].portada);
    img.setAttribute("style", "width:300px;height:400px;");
    //back of card
    let flipCardBack = document.createElement("div");
    flipCardBack.setAttribute("class", "flip-card-back");
    let title = document.createElement("h2");
    title.innerHTML = array[i].titulo;
    let description = document.createElement("h4");
    description.innerHTML = array[i].descripcion;
    let moreInfo = document.createElement("button");
    moreInfo.setAttribute("class", "btn btn-primary");
    moreInfo.setAttribute("data-fancybox", "images");
    moreInfo.setAttribute("href", array[i].portada);
    moreInfo.innerHTML = "More Info";

    //append
    main.append(flipCard);
    flipCard.append(flipCardInner);
    flipCardInner.append(flipCardFront, flipCardBack);
    flipCardBack.append(title, description, moreInfo);
    flipCardFront.append(img);
  }
}

//Search engine
function searchEngine() {
  document.getElementById("search").addEventListener("keyup", function() {
    Display();
  });
}
function Display() {
  var result = [];
  var input = document.getElementById("search").value;

  for (var i = 0; i < myarr.length; i++) {
    if (
      myarr[i].titulo.toLowerCase().includes(input.toLowerCase()) ||
      myarr[i].detalle.includes(input)
    ) {
      result.push(myarr[i]);
      var removeAll = document.getElementById("display");
      removeAll.innerHTML = "";
    }
  }
  createBook(result, "display");
}
