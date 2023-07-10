/**
 * TCP 服务端
 * 
**/

const net = require("net")
const HOST = "127.0.0.1"
const PORT = "10010"

/**
 * 创建一个TCP服务器实例，调用listen函数开始监听制定端口
 * 传入net.creatServer()的回调函数作为connection事件的处理函数
 * 在每一个connection事件中，该回调函数接受到socket对象是唯一的
*/

net.createServer(function(sock){
    // 我们获得一个连接，该连接自动关联一个socket对象
    console.log(`CONNECTED: ${sock.remoteAddress}:${sock.remotePort}`)

    // 为这个socket实例添加一个data事件处理函数
    sock.on("data", function(data){
        console.log(`DATA: ${sock.remoteAddress}:${data}`)

        // 回发送数据，客户端收到来自服务端的数据
        sock.write(`You said ${data}`)
    })

    // 为这个socket实例添加一个close事件处理函数
    sock.on("close", function(data){
        console.log(`CLOSED: ${sock.remoteAddress}:${sock.remotePort}`)
    })

}).listen(PORT, HOST)

console.log(`Server listening on ${HOST}:${PORT}`)
