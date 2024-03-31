import axios from './request'
//这是首页页面数据的接口
export const getApiHomeData = (param) => {
  return axios.request({
    url: '/home/getHomeData',
    method: 'get',
    data: param, //发送请求时，携带的参数param，若没有也不影响
  })
}

//这是商店页面数据的接口
export const getApiStoreData = (param) => {
  return axios.request({
    url: '/store/getStoreData',
    method: 'get',
    data: param, //发送请求时，携带的参数param，若没有也不影响
  })
}
