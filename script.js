const shoppingList = []; // Array to store shopping list items

function createItemObject(itemName,) {
    return {
        name: itemName,
    };
}

const addItemButton = document.getElementById('addItem');
const newItemInput = document.getElementById('newItem');

addItemButton.addEventListener('click', () => {
    let newItem = newItemInput.value.trim();
    if (newItem) {
        const itemObject = createItemObject(newItem);
        shoppingList.push(itemObject);
        updateListDisplay();
        newItemInput.value = '';
    }
});

const shoppingListElement = document.getElementById('shoppingList');

function updateListDisplay(filteredList = shoppingList) {
    shoppingListElement.innerHTML = ''; 

    filteredList.forEach(item => {
        const listItem = document.createElement('li');
        const itemNameSpan = document.createElement('span');
        itemNameSpan.textContent = item.name;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.classList.add('remove-item'); 
        listItem.appendChild(itemNameSpan);
        listItem.appendChild(removeButton);

       
        removeButton.addEventListener('click', () => {
            const itemIndex = shoppingList.indexOf(item);
            if (itemIndex !== -1) {
                shoppingList.splice(itemIndex, 1); 
                updateListDisplay(); 
            }
        });

       
        
        shoppingListElement.appendChild(listItem);
    });
}

updateListDisplay(); 
