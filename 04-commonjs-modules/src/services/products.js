//funções que lidam com produto
async function getFullName(id, prodName){
    console.log(id + " -- " + prodName);
    await doBreakLine();
}

async function getProductLabel(prodName){
    console.log("Produto " + prodName);
    await doBreakLine();
}

//hidden function - não é exportada
async function doBreakLine(){
    console.log('\n');
}

const productType = {
    version: 'Digital',
    tax: 'x1'
}

// hidden const
const apiUrl = {
    url: 'www.google.com/api'
}

module.exports = {
    getFullName, 
    getProductLabel,
    productType,
};