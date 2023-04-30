

//ARCHIVO DE CONEXION A MONGODB


const mongoose =require('mongoose'); //Exportamos modulo debe ser bajado 
//guardo la conexcion este link lo proporciona mongodb
// const URI = 'mongodb+srv://ccamAdmin:6Qq1ZFBKTpR29050@cluster0.snkhb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const URI = 'mongodb+srv://ccamAdmin:UNdianuevo.12@cluster0.crrhj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI, { useNewUrlParser:true,  useUnifiedTopology: true})
.then(db=> console.log('BASE CONECTADA'))
.catch(err => console.log(err));


module.exports = mongoose;
