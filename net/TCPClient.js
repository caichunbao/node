/**
 * TCP 客户端
 * 
**/

const net = require("net")
const HOST = "127.0.0.1"
const PORT = "10010"

let client = new net.Socket();

client.connect(PORT, HOST, function(){

    console.log(`CONNECTED TO: ${HOST}:${PORT}`);

    client.write(`I am xiaoming.`)
})

client.on("data", function(data){
    console.log(`DATA: ${data}`);

    client.destroy();
})

client.on("close", function(){
    console.log(`Connection closed`);
})
