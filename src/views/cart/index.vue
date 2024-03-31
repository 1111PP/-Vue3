<template>
  <div class="cart">
    <Header
      title="购物车"
      edit="true"
    />
    <Empty v-if="isCartEmpty" />
    <CartDetail
      v-else
      :initPage="initPage"
      :changeIsEdit="changeIsEdit"
    />

    <!-- 将下方导航栏挤压到最底部，主要是给.cart盒子height: 100%;-->
    <Footer></Footer>
  </div>
</template>

<script>
import Empty from '../../components/Empty.vue'
import CartDetail from './CartDetail'
import Footer from '../../components/Footer.vue'
import Header from '../../components/Header.vue'
import { useStore } from 'vuex'
import { ref, onMounted, reactive, toRefs } from 'vue'
import { showToast } from 'vant'
export default {
  components: {
    Empty,
    CartDetail,
    Footer,
  },

  setup() {
    const store = useStore()
    // isCartEmpty是否显示CartEmpty组件，默认为显示
    const isCartEmpty = ref(true)

    // 放在onMounted函数中调用, 以及放到子组件CartDetail组件中的删除按钮函数中
    // 若当前Vuex中的cartList购物车数据为空则修改isCartEmpty，从而显示CartEmpty组件
    const initPage = () => {
      // if (store.state.cartList.length === 0) isCartEmpty.value = true
      // else isCartEmpty.value = false
      isCartEmpty.value = store.state.cartList.length === 0 ? true : false
    }

    // 传递给Header组件的函数，用于修改CartDetial组件的isEdit值
    const changeIsEdit = () => {
      if (store.state.cartList.length) store.commit('changeIsEdit')
      else showToast('请选择你的商品')
    }

    // // 修改isCartEmpty操作
    // // 传递给子组件CartDetail，用于其编辑按钮点击后，点击下方删除按钮清空购物车触发此函数
    // // 从而达到显示CartEmpty组件的目的
    // const changeIsCartEmpty = () => {
    //     isCartEmpty.value = !isCartEmpty.value
    // }

    onMounted(() => {
      initPage()
    })
    return {
      // isEdit,
      store,
      isCartEmpty,
      changeIsEdit,
      // changeIsCartEmpty,
      initPage,
    }
  },
}
</script>

<style lang="less">
.cart {
  display: flex;
  flex-flow: column;
  height: 100%;

  .content {
    flex: 1;
    // 上下可滑动，设置y轴
    overflow-y: auto;
  }
}
</style>
