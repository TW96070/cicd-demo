const { splitBill } = require('./warikan');

describe('割り勘計算のテスト', () => {

    test('3000円を3人で分けると、全員1000円になること', () => {
        const result = splitBill(3000, 3);
        expect(result).toEqual([999, 999, 999]);
    });

    test('3001円を3人で分けると、1人目が1001円、他が1000円になること', () => {
        const result = splitBill(3001, 3);
        expect(result).toEqual([1001, 1000, 1000]);
    });

});