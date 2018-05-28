#!/bin/bash
// process 对象是一个全局变量，它提供当前 Node.js 进程的有关信息，以及控制当前 Node.js 进程。 因为是全局变量，所以无需使用 require()
console.log('process version:', process.version)
console.log('process argv', process.argv)
console.log('process argv0', process.argv0)
console.log('process.execPath:', process.execPath)
console.log('process.execArgv:', process.execArgv)
console.log('process.title:', process.title)
