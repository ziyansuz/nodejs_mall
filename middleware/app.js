// 程序的主入口,作用就类似Springboot工程的入口类
// 引入的位置放在第一行
require('express-async-errors');
require("./db");

let express = require("express");

// 处理日志
let morgan = require("morgan");

let app = express();
let config = require("./config");

// 使用自定义的加强response的中间件
app.use(require("./middleware/response_md"));
app.use(require("./middleware/token_md"));// 校验用户的登录状态
app.use(require("./middleware/permission_md"));// 校验权限

// 使用日志功能
app.use(morgan('combined'));
// 解析json格式的数据
app.use(express.json());
// 加载自定义的路由模块
app.use("/user", require("./router/user"));
app.use("/category", require("./router/category"));
app.use("/product", require("./router/product"));
app.use("/order", require("./router/order"));

// 处理全局异常的中间件
app.use((err, request, response, next) => {

    // 写出失败的响应
    response.fail(err)

});


app.listen(config.PORT);
