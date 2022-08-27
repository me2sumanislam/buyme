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
const previous = document.getElementById("total-added-product").innerText=cartArray.length;
 
  display(cartArray);


//PlayerAmount start

document.getElementById('calculate-btn').addEventListener('click',function(){

    const inputAmountString = document.getElementById('input-field').value;
//  ;

const playerAmount =inputAmountString*previous ;
console.log(playerAmount);

 

const previousPlayerAmount = document.getElementById('total-amount').innerText = playerAmount;


document.getElementById('team-total-btn').addEventListener('click',function(){

    const coachAmount = parseFloat(document.getElementById('coach-fee').value);
   

    const managerAmount = parseFloat(document.getElementById('manager-fee').value);

     

const teamMenesAmount = coachAmount+managerAmount+previousPlayerAmount;
    console.log(teamMenesAmount);

 

    const  teamMenesmentAmount = document.getElementById('team-cost').innerText = teamMenesAmount;




})


});


}


//playerAmount end

// document.getElementById('team-total').addEventListener('click',function(){

//     const chochAmount = parseFloat(document.getElementById('choch-fee').value);
   

//     const menejarAmount = parseFloat(document.getElementById('menejar-fee').value);

     

// const teamMenesAmount = chochAmount+menejarAmount+ previous;    
//     console.log(teamMenesAmount);
//     const previousPlayerAmount = document.getElementById('total-amount').innerText = teamMenesAmount;


//  })

 
  






 