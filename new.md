## 1. mongodb
在Ubuntu中使用apt安装MongoDB时，默认的数据存放位置为/var/lib/mongodb
```sh
#默认备份到当前dump目录下. mydb是db名字
mongodump --db mydb  
#指定目录
mongodump --out /home/user/backup
mongorestore /home/user/backup

#命令行登陆
mongo --host 123.45.67.89 --port 27017 -u myuser -p mypassword --authenticationDatabase mydatabase
或
mongo --username admin --password addi233%40Wdkfo --authenticationDatabase admin
mongosh "mongodb://admin:mypassword@123.45.67.89:27017/mydatabase"
```
#mongodb如何设置用户名和密码
```sh
要设置 MongoDB 数据库的用户名和密码，您需要执行以下步骤：

1. 启用身份验证
auth = true 是一个旧的配置选项，用于在早期版本的 MongoDB 中启用身份验证。在 MongoDB 3.0 及更高版本中，应该使用 security.authorization= enabled 来启用身份验证
在 MongoDB 中启用身份验证可以确保只有授权用户才能访问数据库。要启用身份验证，请在 mongodb.conf 文件中添加以下行：

```sh
security:
  authorization: enabled
```
创建管理员用户
在启用身份验证后，您需要创建一个管理员用户，以便管理数据库。要创建管理员用户，请使用以下命令：

```sh
use admin
db.createUser({
  user: "admin",
  pwd: "addi233@Wdkfo",
  roles: [ { role: "root", db: "admin" } ]
})
```
请将 admin_password 替换为您要使用的管理员密码。

创建其他用户
在创建管理员用户后，您可以创建其他用户并授予它们适当的角色。要创建其他用户，请使用以下命令：

```sh
use senstity
db.createUser({
  user: "mongo",
  pwd: "yydioie56@1",
  roles: [ { role: "readWrite", db: "senstity" } ]
})
```
请将 myuser 替换为您要创建的用户名，myuser_password 替换为您要使用的密码，mydatabase 替换为您要授予用户访问权限的数据库名称，readWrite 替换为您要授予用户的角色。

测试身份验证
完成上述步骤后，您可以测试身份验证是否正常工作。要测试身份验证，请使用以下命令连接到 MongoDB 数据库：

复制
mongo --username admin --password addi233@Wdkfo --authenticationDatabase admin
请将 admin_password 替换为您在步骤 2 中设置的管理员密码。如果连接成功，则表示身份验证已经启用并正常工作。



```
### 1.count方法的替换方法的用法

如果正在使用MongoDB 4.0或更高版本，建议使用countDocuments方法来替换count方法。以下是一个简单的示例：

```sh
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
### 2.查找并修改
```sh
db.tran.findOneAndUpdate({ transactionId: "db740c73-e543-445a-95c5-0e48c917e9ed" }, { $set: { "idDoc.result.status.result": "Passed" } }, { new: true });
db.transaction.update({transactionId: 'd505ca10-9610-4a37-8359-48221957937e'}, {$set: {"idDoc.retries": 0}})

db.tran.find({transactionId: "5e7b77c1-d05e-4f63-b60b-e1d1f9c663e3"}, {faceMatch: 1, idDoc: 1});
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



sudo certbot certonly --standalone生成证书的保存位置。ubuntu
/etc/letsencrypt/live/yourdomain.com/
```


## 4. mac上docker desktop修改docker engine配置后，不能启动。如何解决
```sh
如果您在Docker Desktop上修改了Docker引擎的配置，并且无法启动Docker Desktop，则可以尝试以下步骤：

关闭Docker Desktop应用程序

打开终端并执行以下命令以停止Docker引擎：


sudo killall com.docker.osx.hyperkit.linux
执行以下命令以备份Docker Desktop的配置文件：


cp ~/Library/Group\ Containers/group.com.docker/settings.json ~/Desktop/settings.json.bak
执行以下命令以删除Docker Desktop的配置文件：


rm ~/Library/Group\ Containers/group.com.docker/settings.json
启动Docker Desktop应用程序，并等待它重新创建配置文件

尝试重新修改Docker引擎的配置并启动Docker Desktop

请注意，这将删除您的Docker Desktop配置文件，并可能导致您失去一些设置和数据。因此，在执行此操作之前，请确保备份了您的数据。
```
## 5. nodejs计算iso时间差
console.log(Math.floor(Math.abs(moment(new Date()).diff(result.createDate)) / 1000));

## 6.以下是一个简单的Express.js应用程序的Dockerfile示例：

```sh
# 使用node 14作为基础镜像
FROM node:14

# 创建一个app目录来存放应用程序
WORKDIR /app

# 将应用程序依赖项复制到容器中
COPY package*.json ./

# 安装依赖项
RUN npm install

# 将应用程序代码复制到容器中
COPY . .

# 忽略不需要复制的文件夹
COPY .dockerignore .

# 暴露3000端口
EXPOSE 3000

# 启动应用程序
CMD ["npm", "start"]
```
要构建镜像，请在Dockerfile所在的目录中运行以下命令：


docker build -t express-app .
这将使用当前目录中的Dockerfile文件构建一个名为express-app的镜像。

要运行容器，请运行以下命令：


docker run -p 3000:443 express-app

这将启动一个名为express-app的容器，并将主机的3000端口映射到容器内的3000端口。

清空docker缓存
docker system prune -a

## 7.ubuntu
Ubuntu 16.04以后，可以使用snap搜索（snap find 软件包） 和安装 （snap install 软件包）
https://snapcraft.io/docs/getting-started
[snap商店](https://snapcraft.io/store)

防火墙 ufw，iptables

sudo ufw status
sudo iptables -nvL 

[centos防火墙firewall-cmd](https://zhuanlan.zhihu.com/p/612481340)
## 8.brew
brew services list 列出所有brew服务
brew services restart mongodb-community

sudo systemctl start 服务名


,
  "registry-mirrors": [
    "http://registry.cn-hangzhou.aliyuncs.com",
    "http://registry.docker-cn.com",
    "http://docker.mirrors.ustc.edu.cn",
    "http://hub-mirror.c.163.com"
  ]