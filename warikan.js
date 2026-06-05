// 金額と人数を入れると、1人あたりの支払額を配列で返す関数
function splitBill(amount, people) {
    if (amount < 0 || people <= 0) return [];
    
    const base = Math.floor(amount / people); // 切り捨てのベース金額
    const remainder = amount % people;        // あまり（端数）
    
    const result = Array(people).fill(base);
    
    // 端数（あまり）があれば、1人目の支払額にプラスするルール
    if (remainder > 0) {
        result[0] += remainder;
    }
    
    return result;
}

module.exports = { splitBill };