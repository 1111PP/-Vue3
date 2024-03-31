<template>
    <div class="order">
        <Header title="订单" />
        <div class="content">
            <van-tabs color="#ffc400">
                <!-- tab导航栏  navData: ["全部", "交易完成", "代付款", "待发货", "已发货"]-->
                <van-tab v-for="(item, index) in navData" :title="item" :key="index">
                    <!-- 订单内容部分 -->
                    <div v-if="List.length" v-for="(item, index) in List" :key="index">
                        <van-card :num="item.num" :price="item.price" :desc="`下单时间:${item.date}`" :title="item.title"
                            :thumb="item.pic">
                        </van-card>
                    </div>
                    <!-- 订单为空显示此Empty组件 -->
                    <div v-else>
                        <Empty />
                    </div>

                </van-tab>
            </van-tabs>

        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import { toRefs, reactive, onMounted } from 'vue'
import Footer from '../../components/Footer.vue'
import Empty from '../../components/Empty.vue'
import Header from '../../components/Header.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    components: {
        Header,
        Footer,
        Empty
    },
    setup() {
        const router = useRouter()
        const store = useStore()
        const data = reactive({
            navData: ["全部", "交易完成", "代付款", "待发货", "已发货"],
            List: []
        })

        const initHistoryOrder = () => {
            // 先去Vuex中找，若为空则表示没有历史订单数据，则赋值空数组
            data.List = store.state.historyOrder || []
        }
        onMounted(() => {
            initHistoryOrder()
        })
        return {
            store,
            ...toRefs(data)
        }
    }
}
</script>

<style lang="less">
.order {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        // 上下可滑动,设置y轴
        overflow-y: auto;

        .empty-content {
            flex: 1;
            margin: 20px;
            font-size: 16px;
            overflow-y: auto;
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            border-radius: 10px;
            // height: 80vh;

            .icon {
                // font-size: 15px;
                margin-bottom: 10px;
            }
        }
    }
}
</style>