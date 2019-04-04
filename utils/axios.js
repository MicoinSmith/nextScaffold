import axios from 'axios';
import QS from 'qs';
import { notification } from 'antd';

const isDev = process.env.NODE_ENV === 'development' ? true : false;
const port = parseInt(process.env.PORT, 10) || 3001;
const domain = `localhost:${port}`;

// axios 配置
axios.defaults.baseURL = isDev ? `http://${domain}` : `http://production.com`;
axios.defaults.timeout = 5000;  //设置超时时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // token
    config.headers = {
      "Content-Type": "application/json;charset=utf-8" //设置跨域头部,虽然很多浏览器默认都是使用json传数据，但咱要考虑IE浏览器。
    };
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    if (response.status === 200) {
      notification.open({
        message: response.status,
        description: 'Request status.'
      });
      return Promise.resolve(response);
    }
    notification.open({
      message: response.status,
      description: 'Request status.'
    });
    return Promise.reject(response);


  },
  // 判断处理错误码
  err => {
    if (err.response.status) {
      notification.open({
        message: err.response.status,
        description: 'Request status.'
      });
      switch (err.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          notification.open({
            message: '401: 未登录',
            description: 'Request status.'
          });
          break;

          // 403 token过期
          // 登录过期对用户进行提示
          // 清除本地token和清空vuex中token对象
          // 跳转登录页面
        case 403:
          notification.open({
            message: '403 token过期',
            description: 'Request status.'
          });
          break;

          // 404请求不存在
        case 404:
          notification.open({
            message: '404 请求不存在',
            description: 'Request status.'
          });
          break;
          // 其他错误，直接抛出错误提示
        default:
          notification.open({
            message: err,
            description: 'Request status.'
          });
      }
      return Promise.reject(err.response);
    }
  }
);

export default axios;

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {

  return new Promise((resolve, reject) => {
    axios.get(url, QS.stringify({
      params: params
    }))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(res => {
        resolve(res.data);
      }, err => {
        reject(err);
      });
  });
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(res => {
        resolve(res.data);
      }, err => {
        reject(err);
      });
  });
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(res => {
        resolve(res.data);
      }, err => {
        reject(err);
      });
  });
}
