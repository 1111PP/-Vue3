<template>
  <div>
    <Header :title="handleTitle" />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :address-info="addressInfo"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { reactive, toRefs, onMounted, computed } from 'vue'
import { showToast } from 'vant'
export default {
  components: { Header },
  setup() {
    // useRoute是获取当前组件的路由信息
    // useRouter是获取控制所有组件的router(💡首领)
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const data = reactive({
      // 选择地址的地址库
      areaList: {
        province_list: {
          110000: '广东省',
          120000: '浙江省',
          130000: '上海市',
        },
        city_list: {
          110100: '广州市',
          110200: '深圳市',
          120100: '杭州市',
          120200: '宁波市',
          130100: '上海市',
        },
        county_list: {
          110101: '天河区',
          110102: '海珠区',
          120102: '上城区',
          130102: '下城区',
          130101: '浦东新区',
        },
      },
      //初始地址信息
      addressInfo: [],
    })
    const handleTitle = computed(() => {
      const title = route.query.type === 'add' ? '新增地址' : '编辑地址'
      return title
    })
    const onSave = (content) => {
      if (route.query.type === 'add') {
        // 手动添加id信息，再调用addAddress方法加入到userAddress地址数组中
        content.id = `100${store.state.userAddress.length + 1}`
        store.commit('addAddress', content)
        console.log('add Address info', content)
        router.back()
      } else {
        store.commit('editAddress', content)
        console.log('edit Address info', content)
        // router.push('/address')
        router.back()
      }
      showToast(`${route.query.id === 'add' ? '新增成功' : '修改成功'}`)
    }
    // 13484198017
    const onDelete = (content) => {
      store.commit('deleteaddress', content)
      showToast('Delete successsful ！')
      router.back()
    }
    const init = () => {
      store.state.userAddress.forEach((item) => {
        // 在address组件点击编辑地址的按钮后,会路由跳转到此页面,并携带需要编辑地址的id信息
        // 此处将需要编辑的地址信息赋值给addressInfo，这样初始化此组件时，该地址的各信息就会被渲染到页面的对应位置中
        if (item.id === Number(route.query.id)) {
          data.addressInfo = item
        }
      })
    }
    onMounted(() => {
      init()
    })
    return {
      router,
      route,
      handleTitle,
      ...toRefs(data),
      onSave,
      onDelete,
    }
  },
}
</script>

<style lang="less" scoped></style>
