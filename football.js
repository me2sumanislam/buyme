 const cartArray =[];

 function display(cartProduct){
    // console.log(cartProduct);
    const tableBody = document.getElementById("cart-products");
    tableBody.innerHTML = " ";

    for(let i = 0; i<cartProduct.length; i++){
// console.log(cartArray[i].productName);
const name = cartArray[i].productName;
// console.log(name);

const tr = document.createElement('tr');

tr.innerHTML = `
         <th>${i + 1}</th>
         <th>${ name }</th>
        
        `;

        tableBody.appendChild(tr);

    }

}


 function addToCart(element){
const productName=element.parentNode.parentNode.children[0].innerText;
// console.log(productName);
const productobj={
    productName:productName,
}
// console.log(productobj);
cartArray.push(productobj);
// console.log(cartArray);
document.getElementById("total-added-product").innerText=cartArray.length;

document.getElementById("total-added-product").innerText = cartArray.length;
display(cartArray);

 }