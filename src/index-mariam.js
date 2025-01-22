
var dataC = [];
var card = document.getElementById("card");
var myhttp = new XMLHttpRequest();
myhttp.open("GET", "https://fakestoreapi.com/products/categories", true);
myhttp.send();
myhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
     dataC = JSON.parse(this.responseText);
     displayCards(dataC);
  }
};
function displayCards(data) {
  var categories = "";

  const images = [
    "assets/e.png",
    "assets/jew.jfif",
    "assets/men.jfif",
    "assets/women.jfif",
  ];

  for (var i = 0; i < data.length; i++) {
    categories += `
      <div class="border-2 border-gray-300 rounded-lg p-4 m-4 cursor-pointer" id="card-${i}">
        <img class="w-52 h-72" src="${images[i]}" alt="${data[i]}" /> 
        <h2 class="text-center">${data[i]}</h2>
      </div>`;
  }

  card.innerHTML = categories;

  for (var i = 0; i < data.length; i++) {
    const cardElement = document.getElementById(`card-${i}`);
    cardElement.addEventListener("click", function () {
      const categoryText = this.querySelector("h2").innerText;
      console.log("Category:", categoryText);

      window.location.href = `./Category.html?category=${encodeURIComponent(categoryText)}`;
    });
  }
}

