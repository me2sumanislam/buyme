function addToCart(element){
// console.log(element.parentNode.parentNode.children[0].innerText);

const productName = element.parentNode.parentNode.children[0].innerText;
console.log(productName);
    
const productPrice = element.parentNode.parentNode.children[1].innerText;
console.log(productPrice);
    
}