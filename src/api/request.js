import axios from 'axios'
// 定义请求的基础路径❓❓❓基础地址为'',实际上若发送请求的话，浏览器会自动拼接上url路径
//      比如：axios.request('/home/data')就会自动拼接为http://loaclhost:8080/home/data
const baseURL = ''
// 定义HttpRequest类,封装axios
class HttpRequest {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  getInsideConfig() {
    return {
      baseURL: this.baseURL,
      header: {},
    }
  }

  // interce:实例  💡此参数指得是axios的实例对象作为参数
  interceptors(interce) {
    // 添加请求拦截器
    interce.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        return config
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error)
      }
    )

    // 添加响应拦截器
    interce.interceptors.response.use(
      function (response) {
        // 若请求数据中的code===200,则直接返回数据data即可
        const { code, data } = response.data
        // 对成功的请求做统一处理,并且统一返回data数据
        if (code === 200) {
          return data
        } else {
          console.log('请求失败')
        }
      },
      function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error)
      }
    )
  }

  request(options) {
    // 创建axios的实例对象,就可以通过实例来发送请求操作
    const instance = axios.create()
    options = { ...this.getInsideConfig(), ...options }
    console.log(options)
    //  添加 请求 / 响应 拦截器
    this.interceptors(instance)
    //利用axios实例instance,添加上各个参数options,然后发送请求
    return instance(options)
  }
}
export default new HttpRequest(baseURL)

// 🟥🟥🟥此文件整体类似于下面操作,区别在于下面没有设置拦截器函数
// 🟥其中options={ baseURL: 'https://api.apiopen.top', timeout: 200 ,url:"/getData" }
// 🟥然后一起给axios实例去配置并且发送请求
// const instance =axios.create({
//     baseURL: 'https://api.apiopen.top',
//     timeout: 200
// });
// instance({
//     url:"/getData"
// })
