import Mock from 'mockjs'
import homeAPI from './MockData/homeAPI'
import storeAPI from './MockData/storeAPI'
//拦截url为'/home/getHomeAPI'的请求,并用homeAPI.getHomeData做出响应数据操作
Mock.mock('/home/getHomeData', homeAPI.getHomeData)
Mock.mock('/store/getStoreData', storeAPI.getStoreData)
