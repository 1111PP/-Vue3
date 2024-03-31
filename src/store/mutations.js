import { ADDCART } from './mutation-types'
export default {
  mutations: {
    [ADDCART](state, value) {
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
}
