//EXPORT DEFAULT

//async no export default, segue essa sintaxe
//exports.nomeFuncao = async (Param) => { Corpo da função }
exports.connectDataBase = async (dataName) => {
    console.log('Se conectando ao banco: '+ dataName);
}

exports.disconnectDataBase = () => {
    console.log('Se desconectando ao banco.');
}