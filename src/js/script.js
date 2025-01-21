// ^ =========Navbar menu mobile =================
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
// ^========Display All Products =================
(function(){
    var myhttp = new XMLHttpRequest();
    myhttp.addEventListener("readystatechange", function(){
        console.log(myhttp.readyState);
        if(myhttp.readyState == 4 && myhttp.status == 200){
            displayAllProduct(JSON.parse(myhttp.response));
        }
    });
    myhttp.open("GET", "https://fakestoreapi.com/products", true);
    myhttp.send();

    function displayAllProduct(list){
        let products = ' ';
        for(let i = 0; i < list.length; i++){
            products += `<div class="w-[30%] sm:w-1/2 md:w-[30%] lg:w-[30%] min-w-[250px] p-3 bg-white border border-[#cce7d0] rounded-[25px] cursor-pointer shadow-[20px_20px_30px_rgba(0,0,0,0.02)] my-4 transition-transform duration-300 ease-in-out relative hover:shadow-[20px_20px_54px_rgba(28,77,161,0.06)] hover:scale-105">
                <a href="details.html?id=${list[i].id}">
                    <img class="w-full rounded-[20px] h-80  object-contain" src="${list[i].image}" alt="${list[i].title}">
                    <div class="text-left py-2">
                        <span class="text-[#606063] text-xs">${list[i].category}</span>
                        <h5 class="pt-2 text-[#1a1a1a] text-sm">${list[i].title}</h5>
                        <div class="flex">
                            ${'<i class="bx bxs-star text-[#f3b519] text-xs"></i>'.repeat(5)}
                        </div>
                        <h4 class="pt-2 text-xs font-bold text-[#088178]">${list[i].price} $</h4>
                    </div>
                    <a href="#" class="absolute bottom-5 right-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#e8f6ea] font-medium text-[#088178] border border-[#cce7d0]">
                        <i class='bx bx-cart'></i>
                    </a>
                </a>
            </div>`;
        }
        document.querySelector("#product").innerHTML = products;
    }
})();


// ^========Display New Arrival Product  =================
(function(){
    var myhttp = new XMLHttpRequest();
    myhttp.addEventListener("readystatechange", function(){
        console.log(myhttp.readyState);
        if(myhttp.readyState == 4 && myhttp.status == 200){
            displayProduct(JSON.parse(myhttp.response));
        }
    });
    myhttp.open("GET", "https://fakestoreapi.com/products?sort=desc&limit=4", true);
    myhttp.send();

    function displayProduct(list){
        let products = ' ';
        for(let i = 0; i < list.length; i++){
            products += `<div class="w-[20%] sm:w-1/2 md:w-[20%] lg:w-[20%] min-w-[200px] p-3 bg-white border border-[#cce7d0] rounded-[25px] cursor-pointer shadow-[20px_20px_30px_rgba(0,0,0,0.02)] my-4 transition-transform duration-300 ease-in-out relative hover:shadow-[20px_20px_54px_rgba(28,77,161,0.06)] hover:scale-105">
                        <a href="#">
                            <img class="w-full rounded-[20px] h-80  object-contain" src="${list[i].image}" alt="${list[i].title}">
                            <div class="text-left py-2">
                                <span class="text-[#606063] text-xs">${list[i].category}</span>
                                <h5 class="pt-2 text-[#1a1a1a] text-sm">${list[i].title}</h5>
                                <div class="flex">
                                    ${'<i class="bx bxs-star text-[#f3b519] text-xs"></i>'.repeat(5)}
                                </div>
                                <h4 class="pt-2 text-xs font-bold text-[#088178]">${list[i].price} $</h4>
                            </div>
                            <a href="#" class="absolute bottom-5 right-2 w-10 h-10 flex items-center justify-center rounded-full bg-[#e8f6ea] font-medium text-[#088178] border border-[#cce7d0]">
                                <i class='bx bx-cart'></i>
                            </a>
                        </a>
                    </div>`;
        }
        document.querySelector("#newProduct").innerHTML = products;
    }
})();

