//Retorna <objeto> |  Retorna identidade num do grupo do proc
process.stdout.write(`Current gid: ${process.getgid()}\n`);
  
//Retorna <intereger> | Retorna identidade num do usuário proc
process.stdout.write(`Current uid: ${process.getuid()}\n`);

//Retorna uma matriz de int com os ids de grupo do usuario
process.stdout.write(`Current groups: ${process.getgroups()}\n`);

//MemoryUsage: Retorna obj q descreve uso de memoria do processo em bytes
process.stdout.write(`MemoryUsage: ${process.memoryUsage()}\n`);
 
//PID: ID do processos
process.stdout.write(`Id do Processo: ${process.pid}\n`);/*  */

//ID pai do processo
process.stdout.write(`PPID: ${process.ppid}\n`);

//Platform: Identifica o SO da maquina
process.stdout.write(`Current uid: ${process.platform}\n`);

//Adiciona os argumentos passado na execução do programa
process.stdout.write(`Argv: ${process.argv}\n`);

//process.stdout.write(`Configurações do Node: ${}\n`);

//Titulo do processo atual 
process.stdout.write(`Title: ${process.title}\n`);

//Define ou retorna a mascara de criacao do processo 
process.stdout.write(`UMask: ${process.umask()}\n`);

//Número do processo desde o inicio
process.stdout.write(`Uptime: ${process.uptime()}\n`);

//Retorna o caminho absoluto q iniciou o processo
process.stdout.write(`Path: ${process.execPath}\n`);

//Somátorio do tempo de uso | Relativo | contando o tempo ate fechar
process.stdout.write(`HRTime: ${process.hrtime()}\n`); 

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function(){
    let msg;

    while ((msg = process.stdin.read()) !== null) {
      process.stdout.write(`Servidor: ${msg}`);
    }
});