const net = require('net');

const o_options_server = {
  "allowHalfOpen": false, //Permitir conexao nao inicializada completamente
  "pauseOnConnect": false //Permitir inicializacao pendente de conexao
}; 

const o_options_listen = {
  "port": "23000", 
  "host": "0.0.0.0",
  "exclusive": true
}; 

const server = net.createServer(o_options_server, function(o_connection){

  console.log(o_connection.remoteAddress);
  console.log(o_connection.remotePort);
  console.log(o_connection.remoteFamily);

  process.stdout.write('Cliente conectado \n\n');
   
  o_connection.on('end', function(){

    process.stdout.write('Desconectado');

  });

  o_connection.on('data', function(str){

    process.stdout.write(str);

  });

  o_connection.write('Escrever mensagem: \n');

});

server.on('error', function(err){
  throw err;
});

server.listen(o_options_listen, function(){
  process.stdout.write('Conexão aberta \n\n');
});