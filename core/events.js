/**
 * 大多数Node.js核心API构建于惯用的异步事件驱动架构，其中某些类型的对象会触发命名事件来调用函数
 * 
 * 
*/

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()


// 当使用on注册监听器时，监听器会在每次触发命名事件时被调用
// 使用once注册，最多可调用一次监听器。当事件被触发时，监听器会被注销，然后再调用
myEmitter.on('test', () => {
    console.log('触发事件')
})

myEmitter.once('test_once', () => {
    console.log('触发事件,once')
})

myEmitter.emit('test')
myEmitter.emit('test_once')
myEmitter.emit('test_once')

