const queryString = window.location.search();
const urlParam = new URLSearchParams(queryString);
const id = urlParam.get("id");
async function getProduct(){
 return fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json());

}
console.log(getProduct())
async function fetchDataDetail(){
    const detail = document.getElementById("detail");
    const product = await getProduct();
detail.innerHTML=`<p>Category: ${product.category}</p>
<p>Description: ${product.description}</p>
<p>Title: ${product.title}</p>
<p>Price: ${product.price}</p>
`
}
window.onload = ()=>{
    fetchDataDetail();
}
const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    fetch(https://fakestoreapi.com/products/${id})
            .then(res=>res.json())
            .then(json=>console.log(json))
function goToDetail(id) {
  window.location.assign(details.html?id=${id});
}