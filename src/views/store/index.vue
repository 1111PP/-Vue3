<template>
  <div class="storeDetails">
    <!-- 店铺头部信息 -->
    <Header title="店铺" />
    <!-- 店铺页面中部内容 -->
    <div class="content">
      <!-- 背景图 -->
      <div class="img"></div>
      <!-- 主体内容 -->
      <div class="foodSort">
        <div class="name">
          {{ title }}
          <img
            :src="img"
            class="store-img"
          />
        </div>
        <!-- tabs栏以及菜品内容 -->
        <MenuList :storeData="storeData" />
      </div>
    </div>
    <!-- 店铺页面底部内容 -->
    <StoreFooter :AddCart="AddCart" />
    <!-- <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" dot />
            <van-action-bar-icon icon="cart-o" text="购物车" :badge="store.state.cartList.length" />
            <van-action-bar-button type="warning" text="加入购物车" @click="AddCart" />
            <van-action-bar-button type="danger" text="去结算" />
        </van-action-bar> -->
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
import Header from '../../components/Header.vue'
import MenuList from './components/MenuList.vue'
import StoreFooter from './components/StoreFooter.vue'
import { useStore } from 'vuex'
import { getApiStoreData } from '@/api/apis'
export default {
  name: 'store',
  components: {
    Header,
    MenuList,
    StoreFooter,
  },
  mounted() {
    // console.log(111, this);
  },
  setup() {
    const store = useStore()
    let data = reactive({
      title: '鱼拿酸菜鱼',
      img: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
      // storeData: [
      //   {
      //     name: '点菜',
      //     // colList组件接收到的数据
      //     data: {
      //       content: '点菜',
      //       items: [
      //         {
      //           text: '热销套餐',
      //           // singleFood组件接收到的数据
      //           children: [
      //             {
      //               pic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc',
      //               title: '隆江猪脚饭',
      //               num: 0,
      //               price: 25.0,
      //               id: 0,
      //               add: true,
      //             },
      //             {
      //               pic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc',
      //               title: '隆江猪脚饭',
      //               num: 0,
      //               price: 25.0,
      //               id: 1,
      //               add: true,
      //             },
      //           ],
      //         },
      //         {
      //           text: '超级折扣',
      //           children: [
      //             {
      //               pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
      //               title: '无骨酸菜鱼+肥牛双拼',
      //               num: 0,
      //               price: 25.0,
      //               id: 5,
      //               add: true,
      //             },
      //             {
      //               pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
      //               title: '香辣水煮鱼+肥牛双拼',
      //               num: 0,
      //               price: 25.0,
      //               id: 6,
      //               add: true,
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   },
      //   {
      //     name: '评价',
      //     data: {
      //       content: '评价',
      //     },
      //   },
      //   {
      //     name: '商家',
      //     data: {
      //       content: '商家',
      //     },
      //   },
      // ],

      storeData: [],
    })
    // 传递给店铺底部StoreFooter组件,用于计算购物车内商品的信息
    const AddCart = () => {
      // 存放添加到购物车的商品信息,首先到vuex中拿已有的cartList数据，如果没有再创建空数组存数据
      const newList = store.state.cartList || []
      // 循环遍历,找到该店铺页面中 --> 点菜小页面的数据
      data.storeData.forEach((item) => {
        // 找到每一个小类型的商品集合
        // 🟥热销套餐 和 超级折扣 这一层小类型的数据(💡即该店铺所有商品)遍历
        // 🚺对于商家和评价这两个页面的数据在storeData中item.data.items是没有的🈯可选链
        item.data.items?.forEach((item) => {
          //🟥热销套餐 或者 超级折扣 俩小类内商品遍历(💡即该店铺内不同类型商品)
          item.children.forEach((item) => {
            if (item.num > 0) {
              newList.push(item)
            }
          })
        })
      })
      // 调用store中的ADDCART方法,将处理好的购物车数据,用Vuex保存
      store.commit('ADDCART', newList)
    }

    const getStoreData = () => {
      // 🟥二次封装axios后，若请求成功，响应拦截器直接返回我们所需要的数据，随后直接赋值即可
      getApiStoreData().then((res) => {
        data.storeData = res
      })
      // 🟥未封装前
      // axios.get('/store/getStoreData').then((res) => {
      //   console.log(res)
      //   const { code, storeData } = res.data
      //   if (code === 200) {
      //     data.storeData = storeData
      //   }
      // })
    }
    onMounted(() => {
      getStoreData()
    })

    return {
      store,
      ...toRefs(data),
      AddCart,
    }
  },
}
</script>

<style lang="less" scoped>
.storeDetails {
  height: 100%;
  display: flex;
  flex-flow: column;

  .content {
    flex: 1;
    // overflow-y: auto;

    .img {
      background: url('../../assets/yuna.jpg') no-repeat center/cover;
      width: 100%;
      height: 150px;
    }

    .foodSort {
      height: 100%;
      background-color: #fff;
      margin-top: -30px;
      border-radius: 20px 20px 0 0;
      // 上下可滑动，设置y轴
      overflow-y: auto;

      .sort {
        margin-top: 10px;
      }

      .name {
        display: flex;
        padding: 20px;
        justify-content: space-between;

        .store-img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          margin-top: -30px;
        }
      }
    }
  }
}
</style>
