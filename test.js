// test.js
const someFunction = require('./index'); // 例

test('ステータスが正常であること', () => {
    const status = someFunction();
    expect(status).toBe(true); // 判定はJestに任せる（process.exitは書かない）
});