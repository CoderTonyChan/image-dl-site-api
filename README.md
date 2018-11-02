# image-dl-site-api
image-dl-site api server for shortcuts

- image-dl-site兄弟项目!


## 部署

### 手动部署

- 部署涉及到以下基本编程常识:
    - 命令行操作
    - Git
    - Node.js >= 8.0.0
    - npm 或 yarn

```部署Node.js环境
yum install git
git clone https://github.com/cnpm/nvm.git ~/.nvm && cd ~/.nvm && git checkout `git describe --abbrev=0 --tags`
echo ". ~/.nvm/nvm.sh" >> /etc/profile
source /etc/profile
nvm list-remote
nvm install v10.0.0
```

```部署测试项目
git clone https://github.com/CTLifeHand/image-dl-site-api.git
cd image-dl-site-api
npm i
```

