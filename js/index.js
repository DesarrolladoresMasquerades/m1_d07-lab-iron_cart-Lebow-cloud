// ITERATION 1

function updateSubtotal(product) {
  

  const price = product.querySelector(".price span").textContent
  const quantity = product.querySelector(".quantity input").value
  const subtotal = price * quantity
  product.querySelector(".subtotal span").innerText = subtotal
  
  return subtotal
  
} 

function calculateAll() {

  const allProducts = Array.from(document.querySelectorAll('.product'));

  let counter = 0
  allProducts.forEach((element)=>{

    counter += updateSubtotal(element) 

  })

  document.querySelector("#total-value span").textContent = counter
  return counter
 

}


// console.log(calculateAll(document.querySelector(".subtotal span").innerText))
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;

  const removeTarget = target.parentNode.parentNode

  removeTarget.remove()

  calculateAll()


 
  


  //... your code goes here
}

// ITERATION 5

function createProduct() {

  const newProduct = document.querySelector(".product").cloneNode(true)  // TRUE COPIA TODOS LOS ELEMENTOS
  const newName = document.querySelector(".create-product td input[type=text]").value
  const newPrice = document.querySelector(".create-product td input[type=number]").value

  newProduct.querySelector(".name span").innerText = newName 
  newProduct.querySelector(".price span").innerText = newPrice 

  newProduct.querySelector(".btn-remove").addEventListener("click", removeProduct)

  document.querySelector("tbody").appendChild(newProduct)

  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeElement = document.querySelectorAll(".btn-remove");
  removeElement.forEach(element=>{element.addEventListener("click", removeProduct)})

  const createProdcutBtn = document.getElementById('create');
  createProdcutBtn.addEventListener('click', createProduct );
});

// console.log(document.querySelectorAll(".btn-remove"))