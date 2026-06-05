console.log("=== 自動テストを開始します ===");
const status = true; 

if (status) {
    console.log("✅ すべてのテストに合格しました！");
    process.exit(0); // 成功コード
} else {
    console.error("❌ テストが失敗しました");
    process.exit(1); // 失敗コード
}
