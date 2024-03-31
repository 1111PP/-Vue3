import request from '@/utils/http'

export const getHomeDataAPI = () => {
  return request({
    url: '/home/getHomeData',
  })
}

export const getStoreDataAPI = () => {
  return request({
    url: '/store/getStoreData',
  })
}
