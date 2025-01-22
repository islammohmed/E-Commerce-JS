var myhttp = new XMLHttpRequest();
myhttp.open("GET", "https://fakestoreapi.com/products/categories", true);
myhttp.send();
myhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      if (data[i] === "electronics") {
        document.getElementById("card").innerHTML += `<a href="https://google.com" target="_blank">
      <div class="border-2 border-gray-300 rounded-lg p-4 m-4">
            <img class="w-52 h-72" src="assets/e.png"/> 
            <h2 class="text-center">${data[i]}</h2> </div></a>`;
      } else if (data[i] === "jewelery") {
        document.getElementById("card").innerHTML += `<a href="https://google.com" target="_blank">
       <div class="border-2 border-gray-300 rounded-lg p-4 m-4"> 
        <img class="w-52 h-72" src="assets/jew.jfif"/>
         <h2 class="text-center">${data[i]}</h2></div></a>`;
      } else if (data[i] === "men's clothing") {
        document.getElementById("card").innerHTML += `<a href="https://google.com" target="_blank">
        <div class="border-2 border-gray-300 rounded-lg p-4 m-4">
    <img class="w-52 h-72" src="assets/men.jfif"/> 
    <h2 class="text-center">${data[i]}</h2> </div>
    </a>`;
      } else if (data[i] == "women's clothing") {
        document.getElementById("card").innerHTML += ` <a href="https://google.com" target="_blank">
        <div class="border-2 border-gray-300 rounded-lg p-4 m-4">
    <img class="w-52 h-72" src="assets/women.jfif"/>
    <h2 class="text-center">${data[i]}</h2></div> </a>`;
      }
    }
  }
};
