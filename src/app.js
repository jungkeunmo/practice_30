import express from 'express'; // express 를 쓰기위해 가져오세요
import path from 'path'; // path 를 써주세요

const PORT = 3000; // 포트는 3000을사용해주세요
const app = express(); // app 님 express를 써주세요

app.set("view engine", "pug"); //app 님아 pug 써주세요

app.use(express.static(path.join(__dirname, "/assets"))); // app 님이 사용할 css js파일은 "/assets"에 있어요

app.get("/" , (req, res) => {
    res.render("index");
}); //app 가져오세요 "/" 세우세요 "index"를

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START`);
}); // 설정 끝 시작 하세요