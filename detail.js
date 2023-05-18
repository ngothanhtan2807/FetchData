console.log(window.location.pathname);

const queryString = window.location.search;
const urlParam = new URLSearchParams(queryString);
const id = urlParam.get("id");
async function getProduct(){
 return fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json());

}
// console.log(getProduct)
console.log("-----------------------"+getProduct())
async function fetchDataDetail(){
    const detail = document.getElementById("detail");
    const product = await getProduct();
    console.log("++++++++++++++++"+product)
detail.innerHTML=`<p>Category: ${product.category}</p>
<p>Description: ${product.description}</p>
<p>Title: ${product.title}</p>
<p>Price: ${product.price}</p>
`
}
window.onload = ()=>{
    fetchDataDetail();
}
