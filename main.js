async function getAll(){
    return fetch('https://fakestoreapi.com/products?limit=6')
    .then(res=>res.json());
}
async function fetchData(){
    const products = await getAll();
    console.log(products);
   const productsDiv = document.getElementsByClassName("right-second")[0];
   for(let item of products){
    productsDiv.innerHTML+=`
    <div class="product">
            <img src="${item.image}" alt="" style="width=300px, height = 360px;">
            <p>${item.title}</p>
            <span>${item.price}</span><span>d</span>
          </div>
    `;
}
}
window.onload=()=>{
    fetchData();
}  