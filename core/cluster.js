/**
 * cluster模块
 * 单个Node.js实例运行在单个线程中。为了充分利用多核系统，有时需要启用一组Node.js进程去处理负载任务
 * 
*/

const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

console.log(cluster.isMaster)
if(cluster.isMaster){
    console.log(`主进程 ${process.pid} 正在运行`)

    for(let i = 0; i < numCPUs; i++){
        cluster.fork()
    }

    cluster.on('exit', (worker, codes, signal) => {
        console.log(`工作进程 ${ worker.process.pid} 已经退出`)

    })

    // console.log(cluster.workers)
} else {
    http.createServer( (request, response) => {
        console.log(`工作进程 ${process.pid}`)
        response.writeHead(200, {'Content-Type': 'text/plain; charset=utf8'})
        response.end('你好世界\n')
    }).listen(8089)

    console.log(`工作进程 ${process.pid} 已经启动`)
}


