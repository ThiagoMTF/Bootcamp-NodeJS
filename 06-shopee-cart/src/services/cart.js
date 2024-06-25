// add item
async function addItem(userCart, item){
    userCart.push(item);
}

// delete item
async function delItem(userCart, item){
    const index = userCart.findIndex((itemAt) => itemAt.name === item.name);
    if(index != -1){
        //splice(posicao, qnt_de_itens_p_remover)
        userCart.splice(index, 1);
    }
}

//remove item
async function rmvItem(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if(indexFound == -1){
        console.log("Item não encontrado.");
        return;
    }
    if(userCart[indexFound].qtd > 1){
        userCart[indexFound].qtd -= 1;
    }
    if(userCart[indexFound].qtd == 1){
        userCart.splice(indexFound, 1);
    }
}
// calc total
async function calcTotal(userCart){
    console.log(userCart.reduce((total, item)=>total + item.subtotal(), 0));
}

async function displayCart(userCart){
    console.log('Cart List:');
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - ${item.qtd}un - R$ ${item.price} | SubTotal: R$ ${item.subtotal()}`);
    })
}

export {
    addItem,
    calcTotal,
    delItem,
    rmvItem,
    displayCart,
}