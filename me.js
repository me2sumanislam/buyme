

document.getElementById('calculate-btn').addEventListener('click',function(){

    const inputAmountString = document.getElementById('input-field').value;

// console.log(inputAmountString);
     const totalPlayer =5;

const playerAmount =inputAmountString*totalPlayer ;

// console.log(multipy);

const previousPlayerAmount = document.getElementById('total-amount').innerText = playerAmount;


document.getElementById('team-total').addEventListener('click',function(){

    const chochAmount = parseFloat(document.getElementById('choch-fee').value);
   

    const menejarAmount = parseFloat(document.getElementById('menejar-fee').value);

     

const teamMenesAmount = chochAmount+menejarAmount+previousPlayerAmount;
    console.log(teamMenesAmount);


 })

    
     });

//      document.getElementById('team-total').addEventListener('click',function(){

//         const chochAmount = parseFloat(document.getElementById('choch-fee').value);
       

//         const menejarAmount = parseFloat(document.getElementById('menejar-fee').value);

         

//  const teamMenesAmount = chochAmount+menejarAmount+previousPlayerAmount;
//         console.log(teamMenesAmount);
 

//      })


 
























//      function multiplyBy()
// {
//         num1 = document.getElementById("firstNumber").value;
//         num2 = document.getElementById("secondNumber").value;
//         document.getElementById("result").innerHTML = num1 * num2;
// }
