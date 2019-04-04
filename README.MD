## 一个基于Next react的脚手架



### alias : '@' 指向 './' 目录
{
  添加了: [
    Koa: '@/service' 项目启动入口
    mock: '@/mock' 基于express的mock服务器
    Antd组件: 添加了antd组件库的支持 可以放在
  ]
}


### 封装了axios的 get，post =>  '@/utils/axios' ( by return promise )
  {
    这里定义了全局baseURL
    封装了请求拦截和相应拦截，可根据实际项目进行拓展
  }
  
  
### api 封装具体请求方法
  其他页面可以解构调用
    如： import { fetch, post } from '@/utils/api'


### yarn serve => 启动dev 和 mock 两个命令 如果当前port被占用则会启动失败 需要手动kill port && restart


### yarn build => 项目build 到 _next 文件夹
  部署方案 pm2 || nginx || now    (相应部分后续补上)
