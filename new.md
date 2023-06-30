## 1. mongodb的count方法的替换方法的用法

如果正在使用MongoDB 4.0或更高版本，建议使用countDocuments方法来替换count方法。以下是一个简单的示例：

```node
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
if (err) {
console.error(err);
return;
}

const collection = client.db('mydb').collection('mycollection');

// 使用countDocuments方法获取文档数量
collection.countDocuments()
.then(count => console.log(`文档数量为 ${count}`))
.catch(err => console.error(err))
.finally(() => client.close());
});

const total = await db.collection("tr")
	.countDocuments({"id": {$ne: null, $exists: true}});
```


## 2. expressjs配置前端页面

如果您想使用Express.js来配置前端页面，您可以使用以下代码：

```node
const express = require('express');
const app = express();

// 设置静态文件目录
app.use(express.static('public'));

// 设置路由
app.get('/', (req, res) => {
res.sendFile(__dirname + '/public/index.html');
});

// 启动服务器
app.listen(3000, () => {
console.log('服务器已启动');
});
```
在上面的代码中，我们首先创建了一个Express应用程序，并使用express.static中间件将public目录设置为静态文件目录。这意味着所有位于public目录中的文件都可以通过URL访问。

然后，我们定义了一个路由来处理根路径的GET请求，并使用res.sendFile函数将index.html文件发送到客户端。

最后，我们启动了Express服务器，并在端口3000上侦听连接。

请注意，我们假定您的index.html文件位于public目录中。如果您的文件位于其他目录中，请相应地更改文件路径。

## 3. nodejs获取文件目录(ESM)
```node
import {fileURLToPath} from "node:url";
import {dirname} from "node:path";

// 获取当前文件的绝对路径
const __filename = fileURLToPath(import.meta.url);
//获取当前文件的目录
const __dirname = dirname(__filename);
```