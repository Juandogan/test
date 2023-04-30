const express = require ('express'); 
const app = express(); // API



//https
const fs = require('fs');
const https = require('https');

const path = require ('path')
const bodyParser = require ('body-parser');
const multipart = require ('connect-multiparty');

const morgan = require ('morgan'); // middleware Morgan muestra las peticiones en consola. 
const cors = require ('cors');     // autorizacion de cxn entre servidores
const { mongoose } = require('./database'); //mongodb


//var fs = require('fs');
//var https = require('https');


// MULTIPAR
const multiPartMiddleware = multipart({
    uploadDir: './subidas'

});


    
// CREATE API

app.set('port', process.env.PORT || 3000);  // tomo app e nsu propiedad .set  // paso "port" y process.env.PORT (escucha puerto por defecto)
// sino usa el 3000

// Midlewares
app.use(morgan('dev')); // morgan es una funcion, la pegamos en la propiedad use de app. y pasamos el parametro dev que indica que mostrara el mensaje por consola de desarrollo. 
app.use(express.json()); // habilita para que el servidor entienda formato json, es una propiedad de la dependencia Express.npom

app.use(cors('http://168.197.50.191'));
app.use(bodyParser.json({limit: '200mb'}));
app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));


// app.post('/upload', multiPartMiddleware, (req,res)=>{
   
//     var link = req.files['archivos'].path
//     console.log(link)
      
// var url = 'http://168.197.50.191/upload/'+ link.slice(8) 
// console.log({'url': url })
//     res.json({'url':url });
    
    
// });

// app.post('/upload2', multiPartMiddleware, (req,res)=>{
   
//     var link = req.files['upload'].path
      
// var url = 'http://168.197.50.191/upload/'+ link.slice(8) 
// console.log({'url': url })
//     res.json({'url':url });
    
    
// });

// Routes http://
//app.use('/', express.static('client', {redirect:false}))
app.use('/',express.static('client', {redirect:false}));

app.use('/articulos',require('./routes/productos.routes'))
// app.use('/upload', express.static(path.resolve('./subidas')))
app.get('*', function(req, res, next){res.sendFile(path.resolve('client/index.html'));
}) 

//const PUERTO = 3000 ;

// Starting server  
// https.createServer({
//     cert: fs.readFileSync('Certificate.crt'),
//     key: fs.readFileSync('Private.key')
//   },app).listen(PUERTO, function(){
//    console.log('Servidor https correindo en el puerto 443');
// });

app.listen(app.get('port'), () => {console.log("Puerto escuchando en puerto: ", app.get('port'))});    
       

             