

























const cartArray = [];

function display(cartProduct) {
    // console.log(cartProduct);
    if ((cartProduct.length > 5)) {
        alert("You can't Select more than 5 players")
        return;
    }

    const tableBody = document.getElementById("cart-products");
    tableBody.innerHTML = " ";
    for (let i = 0; i < cartProduct.length; i++) {


        // console.log(cartArray[i].productName);
        const name = cartArray[i].productName;
        // console.log(name);

        const tr = document.createElement('tr');

        tr.innerHTML = `
        <th>${i + 1}</th>
        <th>${name}</th>
       
       `;

        tableBody.appendChild(tr);

    }

}
























// const cartArray =[];

// function display(cartProduct){
//    // console.log(cartProduct);
//    const tableBody = document.getElementById("cart-products");
//    tableBody.innerHTML = " ";

//    for(let i = 0; i<cartProduct.length; i++){
// // console.log(cartArray[i].productName);
// const name = cartArray[i].productName;
// // console.log(name);
 
// console.log(name);
// // if(name>5){
// //    alert('select only five player')
// // }
// // else{

// // }




// const tr = document.createElement('tr');

// tr.innerHTML = `
//         <th>${i + 1}</th>
//         <th>${ name }</th>
       
//        `;

//        tableBody.appendChild(tr);

//    }

//    if(name.length<=5){
//       return;
//    }
//    else{
//       alert('you can only five');
//    }

// }




// function addToCart(element){
// const productName=element.parentNode.parentNode.children[0].innerText;
// // console.log(productName);
// const productobj={
//    productName:productName,
// }
// // console.log(productobj);
// cartArray.push(productobj);
// // console.log(cartArray);
// const previous = document.getElementById("total-added-product").innerText=cartArray.length;

//  display(cartArray);

// //PlayerAmount start

// document.getElementById('calculate-btn').addEventListener('click',function(){

//    const inputAmountString = document.getElementById('input-field').value;
// //  ;

// const playerAmount =inputAmountString*previous ;
// // console.log(playerAmount);



// const previousPlayerAmount = document.getElementById('total-amount').innerText = playerAmount;


// document.getElementById('team-total-btn').addEventListener('click',function(){

//    const coachAmount = parseFloat(document.getElementById('coach-fee').value);
  

//    const managerAmount = parseFloat(document.getElementById('manager-fee').value);

    

// const teamMenesAmount = coachAmount+managerAmount+previousPlayerAmount;
//    // console.log(teamMenesAmount);



//    const  teamMenesmentAmount = document.getElementById('team-cost').innerText = teamMenesAmount;



// })


// })


// }
























































 


 

// //  function addTocard(element){
// //    if(cartProduct.lenth<5){
// //       element.disabled = true;
// //    }
// //    else{
// //       element.disabled=false;
// //    }
// //  }






