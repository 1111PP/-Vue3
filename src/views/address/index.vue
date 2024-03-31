<template>
  <div>
    <Header title="地址管理" />
    <!-- 所有地址的信息列表 -->
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      default-tag-text="默认"
      @add="onAdd"
      @select="selectAddress"
      :switchable="true"
      @edit="onEdit"
    />
    <!-- 
     -->
    <van-overlay
      :show="show"
      @click="show = false"
    >
      <div
        class="wrapper"
        @click.stop
      >
        <div class="block">
          <span>是否选择该配送地址</span>
          <div>
            <van-button
              plain
              class="icon"
              type="primary"
              @click="sure"
              >确定</van-button
            >
            <van-button
              plain
              type="primary"
              @click="cancel"
              >取消</van-button
            >
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>
<script>
import { reactive, toRefs, onMounted, computed } from 'vue'
import Header from '@/components/Header.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  components: { Header },
  setup() {
    const router = useRouter()
    const store = useStore()
    const data = reactive({
      // 所有用户信息
      list: [],
      // 无法送达的地址信息
      disabledList: [],
      show: false,
      getValue: {},
      chosenAddressId: 1001,
    })

    // 点击新增地址按钮 触发的事件
    const onAdd = () => {
      console.log('add Address')
      router.push({
        path: '/addressedit',
        query: {
          type: 'add',
        },
      })
    }
    // 点击编辑按钮 触发的事件
    //    默认参数:获取点击项信息----即list数组中对应地址信息
    const onEdit = (i) => {
      console.log('edit Address')
      // console.log(i)
      // 点击编辑按钮: 1.跳转地址编辑页面
      //              2.携带需要编辑的那个地址的id信息,和type类型💡编辑 / 新增 地址都需要跳转同一页面(使用同一路由)
      router.push({
        path: '/addressedit',
        query: {
          id: i.id,
          type: 'edit',
        },
      })
    }
    const initAddressList = () => {
      // 根据用户地址信息生成新的一个userAddress数据
      data.list = store.state.userAddress.map((item) => {
        return {
          id: item.id,
          name: item.name,
          tel: item.tel,
          // 地址拼接
          address: `
              ${item.province ? item.province : ''}
              ${item.city} ${item.county} ${item.addressDetail}
            `,
          isDefault: item.isDefault,
        }
      })
    }

    const chosenAddressId = () => {
      store.state.userAddress.forEach((item) => {
        if (item.isDefault === true) {
          data.chosenAddressId = store.state.currentAddress.id || item.id
        }
      })
    }
    /* 
   // 点击复选框 触发的事件
    //    默认参数:获取点击项信息----即list数组中对应地址信息
    // const selectAddress = (i) => {
    //   // 点击该复选框后,设置该地址为默认地址
    //   store.state.userAddress.forEach((item) => {
    //     if (item.id === i.id) {
    //       item.isDefault = true
    //       chosenAddressId = i.id
    //     } else item.isDefault = false
    //   })

    //   console.log(i.id)
 */

    const selectAddress = (i) => {
      console.log(i)
      data.getValue = i
      data.show = true
    }

    const cancel = () => {
      data.show = false
    }
    const sure = () => {
      store.commit('getCurrentAddress', data.getValue)
      data.show = false
      router.back()
    }
    onMounted(() => {
      initAddressList()
      chosenAddressId()
    })
    return {
      store,
      selectAddress,
      onAdd,
      cancel,
      sure,
      onEdit,
      ...toRefs(data),
    }
  },
}
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 200px;
  height: 200px;
  background-color: #fff;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  span {
    margin: 20px 0;
    font-size: 20px;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      margin: 10px;
    }
  }
}
</style>
