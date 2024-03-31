<template>
  <div class="home">
    <div class="content">
      <!-- 头部区域 -->
      <div class="header">
        <div class="left">美团外卖</div>
        <div class="right">
          <van-icon
            name="location-o"
            size="15"
          />
          <span @click="toAddress">宁波工程学院</span>
          <van-icon
            name="arrow"
            size="15"
          />
        </div>
      </div>
      <!-- 主页面区域 -->
      <div class="main">
        <div class="main-bg">
          <!-- 搜索区域 -->
          <div class="search">
            <input type="text" />
            <span class="search-text">搜索</span>
          </div>
          <!-- 分类区域 -->
          <div class="sort">
            <!-- 大分类 -->
            <div class="big-sort">
              <!-- 遍历data数据渲染大的分类内容 -->
              <div
                v-for="(item, index) in big_sort"
                :key="index"
              >
                <svg
                  class="icon"
                  aria-hidden="true"
                >
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                <span> {{ item.name }}</span>
              </div>
            </div>
            <!-- 小分类 -->
            <div class="small-sort">
              <div
                v-for="(item, index) in small_sort"
                :key="index"
              >
                <svg
                  class="icon"
                  aria-hidden="true"
                >
                  <use :xlink:href="`#${item.icon}`"></use>
                </svg>
                <span> {{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- tabs栏 -->
        <van-tabs
          v-model:active="active"
          class="van-tabs"
          @click="changeTabs(active)"
        >
          <van-tab
            v-for="(item, index) in centent_nav_list"
            :title="item.tab"
            :key="index"
          >
            <!-- 对于列表中每一条商品，选择单独封装一个组件 -->
            <NavListItem :item="item"></NavListItem>

            <!-- <div class=" tabItem" v-for="(i, index) in item.data" :key="index">
                        <div class="pic">
                            <img :src="i.pic" class="p" alt="">
                        </div>
                        <div class="content">
                            <ul>
                                <li>{{ i.title }}</li>
                                <li>￥{{ i.sales }}</li>
                                <li>起送价：{{ i.price }}</li>
                                <li>
                                    <div class="tip">
                                        {{ i.label[0] }}
                                    </div>
                                    <div class="tip">
                                        {{ i.label[1] }}
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div> -->
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
import NavListItem from './components/NavListItem.vue'
import { useRouter } from 'vue-router'
import { reactive, toRefs, ref, onMounted } from 'vue'
// import axios from 'axios'
// import { getHomeDataAPI } from '@/api/allAPI'
import { getApiHomeData } from '@/api/apis'
export default {
  name: 'Home',
  setup() {
    const router = useRouter()
    // tabs栏的索引
    const active = ref(0)
    // 为数据添加响应式 💡后期用mock模拟服务器响应数据,并通过getHomeData函数为data完成赋值操作
    const data = reactive({
      big_sort: [],
      small_sort: [],
      centent_nav_list: [],
      // big_sort: [
      //   {
      //     name: '美食',
      //     icon: 'icon-meishi',
      //   },
      //   {
      //     name: '甜点饮品',
      //     icon: 'icon-tiandian',
      //   },
      //   {
      //     name: '超市便利',
      //     icon: 'icon-chaoshigouwu',
      //   },
      //   {
      //     name: '生鲜果蔬',
      //     icon: 'icon-shengxian-ganju',
      //   },
      //   {
      //     name: '买药看病',
      //     icon: 'icon-maiyao',
      //   },
      // ],
      // small_sort: [
      //   {
      //     name: '午餐',
      //     icon: 'icon-wucan',
      //   },
      //   {
      //     name: '买酒',
      //     icon: 'icon-jiu',
      //   },
      //   {
      //     name: '新鲜水果',
      //     icon: 'icon-xinxianguoshu_xinxianshuiguopingguo',
      //   },
      //   {
      //     name: '汉堡披萨',
      //     icon: 'icon-hanbaopisa',
      //   },
      //   {
      //     name: '休闲饮品',
      //     icon: 'icon-xiuxianyinpin',
      //   },
      //   {
      //     name: '夜宵',
      //     icon: 'icon-yexiao',
      //   },
      //   {
      //     name: '吐司',
      //     icon: 'icon-tusi',
      //   },
      //   {
      //     name: '跑腿',
      //     icon: 'icon-paotuiAPP',
      //   },
      //   {
      //     name: '美人佳丽',
      //     icon: 'icon-kouhong',
      //   },
      //   {
      //     name: '全部分类',
      //     icon: 'icon-fenlei',
      //   },
      // ],
      // centent_nav_list: [
      //   {
      //     tab: '天天神券',
      //     data: [
      //       {
      //         pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
      //         title: '酸菜鱼',
      //         sales: '2888',
      //         price: '20',
      //         label: ['门店上新', '很下饭'],
      //       },
      //       {
      //         pic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cfcy168.com%2FUploadFiles%2F2020%2F2%2F15904074889874037.jpg&refer=http%3A%2F%2Fwww.cfcy168.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1645421933&t=66b58fbba9dce6f6b397e38820de24dc',
      //         title: '隆江猪脚饭',
      //         sales: '2888',
      //         price: '20',
      //         label: ['门店上新', '很下饭'],
      //       },
      //       {
      //         pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
      //         title: '酸菜鱼',
      //         sales: '2888',
      //         price: '20',
      //         label: ['门店上新', '很下饭'],
      //       },
      //       {
      //         pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
      //         title: '酸菜鱼',
      //         sales: '2888',
      //         price: '20',
      //         label: ['门店上新', '很下饭'],
      //       },
      //     ],
      //   },
      //   {
      //     tab: '减配送费',
      //     data: [
      //       {
      //         pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
      //         title: '酸菜鱼',
      //         sales: '2888',
      //         price: '20',
      //         label: ['门店上新', '很下饭'],
      //       },
      //     ],
      //   },
      //   {
      //     tab: '点评高分',
      //     data: [
      //       {
      //         pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
      //         title: '酸菜鱼',
      //         sales: '2888',
      //         price: '20',
      //         label: ['门店上新', '很下饭'],
      //       },
      //       {
      //         pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
      //         title: '酸菜鱼',
      //         sales: '2888',
      //         price: '20',
      //         label: ['门店上新', '很下饭'],
      //       },
      //     ],
      //   },
      //   {
      //     tab: '会员满减',
      //     data: [
      //       {
      //         pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
      //         title: '酸菜鱼',
      //         sales: '2888',
      //         price: '20',
      //         label: ['门店上新', '很下饭'],
      //       },
      //       {
      //         pic: 'https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440',
      //         title: '酸菜鱼',
      //         sales: '2888',
      //         price: '20',
      //         label: ['门店上新', '很下饭'],
      //       },
      //     ],
      //   },
      // ],
    })
    // 点击tabs栏可以获得索引下标，vantUI库通过 v-model:active 绑定当前激活标签对应的索引值，默认情况下启用第一个标签。
    const changeTabs = (num) => {
      console.log(num)
    }

    const toAddress = () => {
      router.push('/createorder')
    }

    // 使用mockjs模拟服务器，mock可以拦截到前端发送给后端服务器的请求
    // 生成模拟数据通过axios发送请求，并返回数据
    const getHomeData = () => {
      // 🟥二次封装axios后，若请求成功，响应拦截器直接返回我们所需要的数据，随后直接赋值即可
      getApiHomeData().then((res) => {
        data.big_sort = res.big_sort
        data.small_sort = res.small_sort
        data.centent_nav_list = res.centent_nav_list
      })
      // 🟥未封装前
      // axios.get('/home/getHomeData').then((res) => {
      //   console.log(res)
      //   // homeData表示请求响应的home组件所需的数据
      //   const { code, homeData } = res.data
      //   // 表示请求成功
      //   if (code === 200) {
      //     // 为data完成赋值操作
      //     data.big_sort = homeData.big_sort
      //     data.small_sort = homeData.small_sort
      //     data.centent_nav_list = homeData.centent_nav_list
      //   }
      // })
    }

    // 🟥小兔鲜项目选择在utils文件和api/AllAPI文件中二次封装了axios
    // 🟥这样调用getHomeDataAPI()即可拿到请求数据,但是这里貌似不行,所有还是选择了上面的请求方式
    // const mineAPI = async () => {
    //   const res = await getHomeDataAPI()
    // }

    onMounted(() => {
      getHomeData()
      // mineAPI()
    })

    return {
      ...toRefs(data),
      active,
      changeTabs,
      toAddress,
      getHomeData,
    }
  },
  components: {
    Footer,
    NavListItem,
  },
}
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-flow: column;
  height: 100%;

  .content {
    flex: 1;
    // 上下可滑动，设置y轴
    overflow-y: auto;

    // 头部区域
    .header {
      //头部区域的渐变色
      background-image: linear-gradient(#ffc400, #fff);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 10px 40px 20px;

      .left {
        font-size: 20px;
        font-weight: 600;
      }

      .right {
        margin: 0 5px;

        span {
          font-size: 14px;
          padding: 0 3px;
        }
      }
    }

    // 主体部分
    .main {
      margin-top: -25px;

      .main-bg {
        background-image: linear-gradient(#fff, #f5f5f5);
        padding: 10px 20px 0px 20px;
        border-radius: 30px 30px 0 0;

        // 搜索区域样式
        .search {
          display: flex;
          justify-content: space-between;
          position: relative;

          input {
            width: 95%;
            border: 1px solid #ffc400;
            border-radius: 20px;
            height: 30px;
          }

          .search-text {
            position: absolute;
            right: 10px;
            background-color: #ffc400;
            border-radius: 16px;
            width: 50px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            font-size: 14px;
          }
        }

        // 分类区域
        .sort {
          padding: 20px 0;

          // 大分类样式
          .big-sort {
            display: flex;

            div {
              flex: 1;
              display: flex;
              flex-flow: column;
              justify-content: center;
              align-items: center;

              .icon {
                width: 35px;
                height: 35px;
                margin-bottom: 5px;
              }

              span {
                font-size: 14px;
              }
            }
          }

          // 小分类样式
          .small-sort {
            display: flex;
            flex-flow: wrap;
            margin-top: 15px;

            div {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-flow: column wrap;
              width: 20%;

              .icon {
                width: 30px;
                height: 30px;
                margin: 10px;
              }

              span {
                font-size: 14px;
              }
            }
          }
        }
      }

      .van-tabs {
        padding: 0 20px;
      }
    }
  }
}

/deep/ .van-tabs__wrap {
  border-radius: 13px;
}
</style>
