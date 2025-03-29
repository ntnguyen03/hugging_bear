const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000;

// Cho phép Express phục vụ các file tĩnh trong thư mục "public"
app.use(express.static("public"));

// Điều hướng tất cả request chưa xác định đến file index.html
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/hug-bunny-game.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
