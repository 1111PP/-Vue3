<template>
  <div class="cartDetail">
    <div class="content">
      <!-- 该复选框组件绑定的checked是一个数组，🟥checked存哪个编号就代表哪个复选框被选中 -->
      <van-checkbox-group
        v-model="checked"
        ref="checkboxGroup"
        checked-color="#ffc400"
        @change="groupChange"
      >
        <div
          v-for="(item, index) in store.state.cartList"
          :key="index"
        >
          <singleFood
            :item="item"
            :showChecked="true"
          />
        </div>
        <!-- <van-checkbox name=" a">复选框 a</van-checkbox> -->
      </van-checkbox-group>
      <!-- 底部结算内容 -->
      <!-- 如果处于编辑状态，则不显示此van-submit-bar组件，💡isEdit默认false -->
      <van-submit-bar
        v-if="store.state.isEdit"
        class="submit-all"
        button-color="#ffc400"
        :price="totalPrice"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox
          v-model="submitChecked"
          checked-color="#ffc400"
          @click="checkAll"
          >全选</van-checkbox
        >
      </van-submit-bar>
      <!-- 点击编辑按钮后显示的底部内容 -->
      <div
        class="buy"
        v-else
      >
        <!-- 左侧全选按钮 -->
        <div class="left">
          <van-checkbox
            v-model="submitChecked"
            checked-color="#ffc400"
            @click="checkAll"
            >全选</van-checkbox
          >
        </div>
        <div
          class="delete"
          @click="delCart"
        >
          删除
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import singleFood from '../../../components/singleFood.vue'
import { showToast } from 'vant'
export default {
  components: {
    singleFood,
  },
  props: ['initPage'],
  setup(props) {
    const router = useRouter()
    const store = useStore()
    const data = reactive({
      checked: [],
      // 复选框按钮初始状态
      submitChecked: true,
    })
    // 购物车的商品复选框 🟥初始应该是全部选中
    const initChecked = () => {
      // 从购物车数据中map遍历，返回每个商品的id形成新数组返回给data.checked数组
      data.checked = store.state.cartList.map((item) => item.id)
    }
    // 🟥底部的全选按钮控制全选或全不选
    const checkAll = () => {
      console.log('checkAll', data.submitChecked)
      // 如果全装按钮的状态为true，将购物车所有商品数据的id添加进checked数组，💡即将所有复选框选中
      // 否则清空checked数组，达到所有复选框取消选择的效果
      if (data.submitChecked) initChecked()
      else data.checked = []
    }
    // 🟥复选框控制全选按钮
    // van-checkbox-group自定义的change事件，当它的子组件复选框改变触发回调
    // 默认参数result，可以获取到 v-model="checked"的数组的信息
    const groupChange = (result) => {
      // result.length可以获取到checked数组的长度，即复选框选中状态下的数量
      console.log('check数组信息', result.length) // result,
      if (result.length != store.state.cartList.length)
        data.submitChecked = false
      else data.submitChecked = true
      console.log(data.checked)
      // 重新给checked赋值❓有没有好像都一样
      data.checked = result
    }

    // 首先拿到checked数组中，里面记录着所有复选框选中状态的商品id，表示需要购买的商品
    // filter筛选购物车cartList，如果改商品的id包含在checked数组中，则表示改商品处于选中状态，即会被过滤到新数组并返回

    // 根据checked复选框选择的情况，筛选出商品信息
    // 参数type用于区分是需要：
    //      1.复选框选中状态的所有商品数据
    //      2.复选框没有选中的所有商品数据
    const updataData = (type) => {
      return store.state.cartList.filter((item) => {
        // 如果用在删除按钮，需要筛选出复选框未选中的所有商品信息，将原购物车信息cartList进行覆盖
        // 如果用在计算价格，需要筛选出复选框选中状态的所有商品信息
        return type === 'delete'
          ? !data.checked.includes(item.id)
          : data.checked.includes(item.id)
      })
    }

    // 计算总价格
    const totalPrice = computed(() => {
      // 获取所有复选框处于选中状态的商品信息
      let countList = updataData()
      let sum = 0
      sum = countList.reduce((p, c) => p + c.num * c.price, 0)
      // countList.forEach((item) => {
      //     sum += item.price * item.num
      // })
      return sum * 100
    })

    // 编辑按钮点击后下方显示的删除按钮
    const delCart = () => {
      // 删除按钮:
      //   1.部分删除
      //   2.全部删除
      if (data.checked.length) {
        store.commit('deleteCartList', updataData('delete'))
        // 上一行删除购物车，然后调用此函数
        //  作用是：如果删除购物车后购物车数据没有了，修改isCartEmpty，v-if展示CartEmpty组件
        props.initPage()
        store.state.isEdit = !store.state.isEdit
      } else {
        showToast('却选择要删除的商品')
        return
      }
    }

    // 底部的提交订单按钮
    // 需求分析：1.检测checked数组是否有值，表示购物车中有商品被选中需要进行支付购买
    //          2.跳转到pay支付页面
    const onSubmit = () => {
      // console.log('submit');
      if (data.checked.length) {
        console.log(1)
        // debugger
        // 拿到复选框选中的所有的商品信息，表示需要结算购买的商品
        store.commit('getOrderList', updataData())
        router.push('/createorder')
      } else showToast('请选择需要购买的商品!')
    }

    // 调用initChecked，初始化checked数组，从而初始化所有复选框
    onMounted(() => {
      initChecked()
    })
    return {
      store,
      totalPrice,
      checkAll,
      groupChange,
      delCart,
      onSubmit,
      ...toRefs(data),
    }
  },
}
</script>
<style lang="less" scoped>
.cartDetail {
  font-size: 14px;
  flex: 1;
  position: relative;
  overflow-y: auto;
  padding: 20px 20px 55px;

  .content {
    display: flex;
    flex-flow: column;
  }

  .submit-all {
    position: fixed;
    bottom: 55px;
    border-bottom: 1px solid #d6d3d3;
  }

  .buy {
    position: fixed;
    bottom: 48px;
    right: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff;
    // border-radius: 10px;
    height: 50px;
    align-items: center;
    padding: 0 16px;
    box-sizing: border-box;

    .left {
      display: flex;
      align-items: center;
    }

    .delete {
      color: #fff;
      background-color: #ffc400;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      width: 110px;
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
  }

  .content {
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
  }
}
</style>
