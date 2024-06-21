//Importando TUDO que foi exportado
// const p = require('./services/products');
//Importando somente as funções que forem necessárias
const { getFullName, productType } = require('./services/products.js');

const config = require('./services/config.js');
const database = require('./services/database.js');

(async function main(){
    console.log(config.devArea.production);
    console.log(config.devArea.version);
    console.log(config.client.device);

    getFullName(1, "Mouse");
    console.log(productType.version);
    console.log(productType.tax);
    
    database.connectDataBase("BD");
})();