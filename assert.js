// assert 模块提供了断言测试的函数，用于测试不变式。
// 有 strict 与 legacy 两种模式，建议只使用 strict模式。
// const assert = require('assert')

// const { message } = new assert.AssertionError({
//   actual: 1,
//   expected: 2,
//   operator: 'strictEqual'
// });

// // 验证输出的错误：
// try {
//   // assert.strictEqual(1, 1);
//   assert.strictEqual({a: 1}, {a: 1});
// } catch (err) {
//   assert(err instanceof assert.AssertionError);
//   assert.strictEqual(err.message, message);
//   assert.strictEqual(err.name, 'AssertionError [ERR_ASSERTION]');
//   assert.strictEqual(err.actual, 1);
//   assert.strictEqual(err.expected, 2);
//   assert.strictEqual(err.code, 'ERR_ASSERTION');
//   assert.strictEqual(err.operator, 'strictEqual');
//   assert.strictEqual(err.generatedMessage, true);
// }

const assert = require('assert');

const obj1 = {
  a: {
    b: 1
  }
};
const obj2 = {
  a: {
    b: 2
  }
};
const obj3 = {
  a: {
    b: 1
  }
};
const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);
// OK, object is equal to itself

//assert.deepEqual(obj1, obj2);
// AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }
// values of b are different

assert.deepEqual(obj1, obj3);
// OK, objects are equal

// assert.deepEqual(obj1, obj4);
// AssertionError: { a: { b: 1 } } deepEqual {}
// Prototypes are ignored
