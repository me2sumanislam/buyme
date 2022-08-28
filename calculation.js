var totalPlayerExpenses = 0
const calculateBtn = document.getElementById('calculate').addEventListener('click', function () {
    const valuePerPlayer = document.getElementById('per-player').value;
    const totalPlayers = document.getElementById('top-players').querySelectorAll('tr').length
    totalPlayerExpenses = parseFloat(valuePerPlayer) * totalPlayers;
    document.getElementById('expenses').innerHTML = totalPlayerExpenses;
})
const calculateTotal = document.getElementById('c-total').addEventListener('click', function () {
    const managerCost = document.getElementById('manager').value;
    const coachCost = document.getElementById('coach').value;
    const totalExpenses = totalPlayerExpenses + parseFloat(managerCost) + parseFloat(coachCost)
    document.getElementById('total').innerHTML = totalExpenses;
})

