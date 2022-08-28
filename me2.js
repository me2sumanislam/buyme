
 
function addToCart(element) {

    if ((cartArray.length < 5)) {
        element.disabled = true;
    }
    else {
        element.disabled = false;

    }


    const productName = element.parentNode.parentNode.children[0].innerText;
    // console.log(productName);
    const productobj = {
        productName: productName,
    }
    // console.log(productobj);
    cartArray.push(productobj);
    // console.log(cartArray);
    const previous = document.getElementById("total-added-product").innerText = cartArray.length;

    display(cartArray);




    //PlayerAmount start

    document.getElementById('calculate-btn').addEventListener('click', function () {

        const inputAmountString = document.getElementById('input-field').value;
        ;

        const playerAmount = inputAmountString * previous;
        console.log(playerAmount);



        const previousPlayerAmount = document.getElementById('total-amount').innerText = playerAmount;


        document.getElementById('team-total-btn').addEventListener('click', function () {

            const coachAmount = parseFloat(document.getElementById('coach-fee').value);


            const managerAmount = parseFloat(document.getElementById('manager-fee').value);



            const teamMenesAmount = coachAmount +managerAmount + previousPlayerAmount;
            console.log(teamMenesAmount);



            const teamMenesmentAmount = document.getElementById('team-cost').innerText = teamMenesAmount;

        })


    })

};