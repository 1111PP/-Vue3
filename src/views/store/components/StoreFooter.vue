<template>
    <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服" dot />
        <van-action-bar-icon icon="cart-o" text="购物车" :badge="countNum" @click="goCart" />
        <van-action-bar-button type="warning" text="加入购物车" @click="AddCart" />
        <van-action-bar-button type="danger" text="去结算" @click="toBuyPage" />
    </van-action-bar>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { showToast } from 'vant';
export default {
    name: "StoreCart",
    props: ["AddCart"],
    setup(props) {
        const router = useRouter()
        const store = useStore()
        // 使用计算属性,计算购物车中商品总数量 💡商品种类 * 商品个数
        // 点击假如购物车后,触发父组件index.vue中的AddCart函数,修改Vuex中cartList的数据
        // 计算属性中的数据发送改变,调用此函数,于是修改了countNum,即修改了第4行的badge页面中购物车的显示数量
        const countNum = computed(() => {
            return store.state.cartList.reduce((p, c) => p + c.num, 0)
        })
        // 点击事件回调 ==> 跳转至购物车页面
        const goCart = () => {
            // 如果购物车内有东西,才会进行页面跳转.否则跳出提示
            if (store.state.cartList.length === 0) {
                // debugger
                showToast('请选择商品');
                return
            }
            router.push('/cart')
        }
        // 点击" 去结算 " 跳转到结算页面
        const toBuyPage = () => {
            // 会重新获取购物车内的所有商品数据,并跳转至购物车cart界面
            goCart()
        }
        return {
            store,
            countNum,
            goCart,
            toBuyPage
        }
    }

}
</script>
<style lang="less" scoped></style>