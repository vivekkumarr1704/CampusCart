let cart = JSON.parse(localStorage.getItem("cart")) || []

updateCartCounter()

const products = {

cycle:[
{name:"Mountain Cycle",price:5000,img:"images/cycle1.jpg"},
{name:"Road Cycle",price:6500,img:"images/cycle2.jpg"},
{name:"Sports Cycle",price:7200,img:"images/cycle3.jpg"}
],

book:[
{name:"Data Structures",price:300,img:"images/book1.jpg"},
{name:"Operating System",price:350,img:"images/book2.jpg"},
{name:"DBMS",price:280,img:"images/book3.jpg"}
],

cloth:[
{name:"Premium Suit",price:800,img:"images/cloth1.jpg"},
{name:"Designer Jacket",price:600,img:"images/cloth2.jpg"},
{name:"Party Wear",price:900,img:"images/cloth3.jpg"}
]

}

let currentProducts=[]

function showProducts(type){

currentProducts = products[type]

displayProducts(currentProducts)

}

function displayProducts(list){

let section=document.getElementById("products")

section.innerHTML=""

list.forEach(p=>{

section.innerHTML+=`

<div class="product">

<img src="${p.img}">

<h3>${p.name}</h3>

<p>₹${p.price}</p>

<button onclick='addToCart("${p.name}",${p.price},"${p.img}")'>
Add To Cart
</button>

</div>

`

})

}

function addToCart(name,price,img){

cart.push({name,price,img})

localStorage.setItem("cart",JSON.stringify(cart))

updateCartCounter()

alert("Added to cart")

}

function updateCartCounter(){

let cartLink=document.getElementById("cartCount")

if(cartLink){

cartLink.innerText=`Cart (${cart.length})`

}

}

function searchProducts(){

let input=document.getElementById("search").value.toLowerCase()

let filtered=currentProducts.filter(p=>
p.name.toLowerCase().includes(input)
)

displayProducts(filtered)

}