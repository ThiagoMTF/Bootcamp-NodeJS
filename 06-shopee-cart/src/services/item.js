
async function createItem(name, price, qtd){
    return {
        name, 
        price,
        qtd,
        subtotal: () => price * qtd,
    }
}

export default createItem;
