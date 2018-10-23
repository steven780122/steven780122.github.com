let express = require("express");
let app = express();


app.use(express.static("www"))    // 設定資料夾www為靜態檔案的資料夾

// 啟動伺服器在 localhost:3000
// 如果要上線不是要測試可以打80，使用者就不用再打port
app.listen(8080, function(){   
    // 伺服器啟動成功的回呼函式
    console.log("server ok!");
});   

