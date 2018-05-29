// Buffer 类被引入作为 Node.js API 的一部分，使其可以在 TCP 流或文件系统操作等场景中处理二进制数据流。
// Buffer 类的实例类似于整数数组，但 Buffer 的大小是固定的、且在 V8 堆外分配物理内存。 Buffer 的大小在被创建时确定，且无法调整。
// Buffer 类在 Node.js 中是一个全局变量，因此无需使用 require('buffer').Buffer。

const buf1 = Buffer.alloc(10)
console.log('buf1:', buf1)

const buf2 = Buffer.alloc(10, 15)
console.log('buf2:', buf2)

const buf3 = Buffer.allocUnsafe(10)
console.log('buf3:', buf3)
