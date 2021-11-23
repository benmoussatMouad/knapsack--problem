let mySack = {
    weight: 0,
    items: []
}

function createSack(weight) {
    mySack.weight = weight;
}

function addItem(item) {

    mySack.items.push(item);
}

function displayMessage(message, status) {
    let messageBox = document.getElementById("messaging");
    let messageText = document.getElementById("message-text");

    if (status === 'success') {
        messageBox.style.backgroundColor = 'lightgreen';
        messageText.innerText = message;
        messageText.style.color = "darkgreen";
    }

}

function displayItems(list, items) {
    let itemList = document.getElementById(list);

    itemList.innerHTML = "";

    items.forEach(function (item) {
        let myItem = document.createElement("li");

        myItem.innerHTML = `${item.name}, <b>Value</b>: ${item.value}, <b>Weight</b>:  ${item.weight}`;

        itemList.appendChild(myItem);
    });
}

// The main function that calculates the best combination
function findBestCombination() {

    //Take mySack as parameter (is above)
    // TODO: Use your algorithm here Mounir

    //return [{name, value, weight}, ..., {}] an array containing the items

}




// Event handlers

document.getElementById("submit-weight").addEventListener("click", function() {
    let weight = parseInt(document.getElementById("sack-weight").value)

    createSack(weight);

    displayMessage(`Sack with weight ${weight} has been created`, "success");
})

document.getElementById("submit-item").addEventListener("click", function () {

    let itemName = document.getElementById("item-name").value
    let itemValue = parseInt(document.getElementById("item-value").value);
    let itemWeight = parseInt(document.getElementById("item-weight").value);

    addItem({
        name: itemName,
        value: itemValue,
        weight: itemWeight,
    })

    displayMessage(`Item ${itemName} has been added`, "success");

    displayItems("item-list", mySack.items);
});



document.getElementById("submit-result").addEventListener("click", function () {

    let combinationOfItems = findBestCombination();

    displayItems("result-list", combinationOfItems);
});