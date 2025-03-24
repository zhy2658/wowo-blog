// postcss.config.js 文件代码
let autoprefixer = require("autoprefixer");
module.exports = {
    plugins: [
        // 方法二 // 这里必须挂上插件
        autoprefixer
    ],
    "browserslist": [
        "last 5 version",
        ">1%",
        "ie>=8"
    ]
};