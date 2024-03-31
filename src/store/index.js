import { createStore } from 'vuex'

//动态获取当前时间
const getNowDate = () => {
  let currentDate = new Date()
  let currentYear = currentDate.getFullYear()
  let currentMonth = currentDate.getMonth() + 1 // 月份从0开始，需要加1
  let currentDay = currentDate.getDate()
  let currentHour =
    currentDate.getHours() < 10
      ? '0' + currentDate.getHours()
      : currentDate.getHours()
  let currentMinute =
    currentDate.getMinutes() < 10
      ? '0' + currentDate.getMinutes()
      : currentDate.getMinutes()
  let currentSecond =
    currentDate.getSeconds() < 10
      ? '0' + currentDate.getSeconds()
      : currentDate.getSeconds()
  return `${currentYear}-${currentMonth}-${currentDay}   ${currentHour}:${currentMinute}:${currentSecond}`
}

export default createStore({
  state: {
    // 购物车数据
    cartList: [],
    //点击Header组件中的编辑按钮，控制CartDetail组件是否显示下方的编辑框
    isEdit: true, //💡默认false不显示
    // 需要结算的商品列表
    orderList: [],
    // 保存用户收获地址的信息
    // 生成订单组件createOrder使用它
    userAddress: [
      {
        id: 1001,
        name: '廖鹏',
        tel: '13484198017',
        province: '浙江省',
        city: '宁波市',
        county: '江北区',
        addressDetail: '宁波工程学院东校区',
        isDefault: true,
        areaCode: '110101',
      },
      {
        id: 1002,
        name: '鹏哥',
        tel: '18868905563',
        city: '上海市',
        county: '浦东新区',
        addressDetail: '汤臣一品',
        isDefault: false,
        areaCode: '110101',
      },
      {
        id: 1003,
        name: '鹏少',
        tel: '13116675178',
        province: '湖北省',
        city: '武汉市',
        county: '武昌区',
        addressDetail: '黄鹤楼',
        isDefault: false,
        areaCode: '110101',
      },
    ],

    // 历史订单
    historyOrder: [],
    currentAddress: {},
  },
  mutations: {
    addCart(state, value) {
      state.cartList = value
    },
    changeIsEdit(state) {
      state.isEdit = !state.isEdit
    },
    deleteCartList(state, value) {
      state.cartList = value
    },
    // 获取需要支付的所有的商品信息
    getOrderList(state, value) {
      state.orderList = value
    },
    // 每次在createOrder组件中点击立即支付按钮，都会往历史记录中添加数据
    getHistoryOrder(state, value) {
      value.map((item) => {
        item.date = getNowDate()
        state.historyOrder.unshift(item)
      })
    },
    // createOrder页面中，当前配送的地址信息
    getCurrentAddress(state, value) {
      state.currentAddress.name = value.name
      state.currentAddress.tel = value.tel
      state.currentAddress.id = value.id
    },
    // 地址簿新增地址
    addAddress(state, value) {
      state.userAddress.map((item) => {
        // 如果新增的地址设置了 设为默认地址，则value.isDefault=true
        if (value.isDefault) {
          item.isDefault = false
        }
      })
      // value.id = `100${store.state.userAddress.length + 1}`
      state.userAddress.push(value)
    },
    // 编辑地址
    editAddress(state, value) {
      if (value.isDefault === true) {
        console.log(value.id)
        // state.currentAddress.id = item.id
      }
      state.userAddress = state.userAddress.map((item) => {
        // 如果编辑地址时，该地址信息设置了默认地址，则其他地址的item.isDefault = false
        if (value.isDefault) {
          item.isDefault = false
        }
        // 若循环到正在编辑的那个地址信息
        // 则说明这个地址信息需要被修改，则返回修改后的信息💡即value，而其他地址信息不变，💡即返回item
        return item.id === value.id ? value : item
      })
    },
    // 删除数据
    deleteaddress(state, value) {
      state.userAddress = state.userAddress.filter((item) => {
        return !(item.id === value.id)
      })
      if (value.isDefault) {
        state.userAddress[0].isDefault = true
      }
    },
  },
  actions: {},
  // getters: {
})
