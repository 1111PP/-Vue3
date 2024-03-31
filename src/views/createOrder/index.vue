<template>
  <div class="create-order">
    <Header title="订单页面" />
    <van-contact-card
      type="edit"
      :tel="tel"
      :name="name"
      @click="onEdit"
    />

    <div class="content">
      <div
        v-for="(item, index) in store.state.orderList"
        :key="index"
      >
        <!-- <singleFood :item="item" /> -->
        <van-card
          :num="item.num"
          :price="item.price"
          :title="item.title"
          :thumb="item.pic"
        />
      </div>
    </div>
    <div class="pay-wrap">
      <div class="price">
        <span>商品金额</span>
        <span>￥{{ getPayMoney }}</span>
      </div>
      <van-button
        type="primary"
        class="pay-btn"
        block
        color="#ffc400"
        @click="handleCreateOreder"
      >
        立即支付
      </van-button>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import { reactive, ref, toRefs, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { showDialog } from 'vant'
export default {
  name: 'createOrder',
  setup(props) {
    const router = useRouter()
    const store = useStore()
    // show控制编辑地址弹窗是否显示
    // const show = ref(false);
    const data = reactive({
      // 下单界面中，收货地址首先取到
      name:
        store.state.currentAddress.name ||
        store.state.userAddress[0].name ||
        '',
      tel:
        store.state.currentAddress.tel || store.state.userAddress[0].tel || '',
    })
    const onEdit = () => {
      router.push('./address')
    }

    // 获取支付金额
    const getPayMoney = computed(() => {
      let sum = 0
      sum = store.state.orderList.reduce((p, c) => p + c.num * c.price, 0)
      return sum
    })

    // // 初始化用户地址
    // const initUserAddress = () => {
    //   // const { data: name,tel}=store.commit('getCurrentAddress')
    //   data.name = store.state.userAddress[0].name
    //   data.tel = store.state.userAddress[0].tel
    // }

    // 立即支付按钮点击回调
    const handleCreateOreder = () => {
      // 异步操作，支付成功.then（）返回主页
      showDialog({
        title: '支付成功！',
        message: '订单支付成功，即将跳转至订单页',
      }).then(() => {
        // 支付成功后，购物车页面中的的商品，应该去除已经支付的商品
        // 修改Vuex中的购物车数据cartList，去掉已支付的的商品信息orderList
        const newList = store.state.cartList.filter((item) => {
          return !store.state.orderList.includes(item)
        })
        // 清空当前订单的地址信息currentAddress
        store.state.currentAddress = {}
        store.commit('deleteCartList', newList)
        store.commit('getHistoryOrder', store.state.orderList)
        router.push('/order')
      })
    }

    return {
      store,
      getPayMoney,
      onEdit,
      handleCreateOreder,
      ...toRefs(data),
    }
  },
}
</script>

<style lang="less" scoped>
.create-order {
  display: flex;
  flex-flow: column;
  height: 100%;

  .content {
    flex: 1;
    overflow-y: auto;
  }

  .pay-wrap {
    padding: 10px 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e9e9e9;

    > div {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      margin: 10px 0;
      font-size: 14px;

      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }

    .pay-btn {
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>
