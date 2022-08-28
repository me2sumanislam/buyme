
const nameList = [];


function displayName() {


    let topPlayers = 0;
    const allPlayers = document.getElementById('top-players');
    allPlayers.innerHTML = '';
    topPlayers.innerText = nameList.length;
    for (let i = 0; i < nameList.length; i++) {
        topPlayers += nameList[i].playersName;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${i + 1}. </td>
        <td>${nameList[i].playersName}</td>
        `;
        allPlayers.appendChild(tr);
    }

    if (nameList.length <= 5) {
        return;

    }
    else {
        alert('You Can Only Select Five Players');
    }
}

function addPlayers(element) {
    const playersName = element.parentNode.children[1].innerText;

    const pName = {
        playersName: playersName,

    }

    // if (nameList.length <= 5) {
    nameList.push(pName);
    // console.log('nameList: ', nameList.length)
    // }

    displayName();
}
You sent
আপু try kore apnake janachi
