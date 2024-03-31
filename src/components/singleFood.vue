<template>
    <div class="content-item">
        <div class="left">
            <!-- 🟥Vant复选框组件，购物车页面 和 店铺页面 会复用此组件，其区别在于多了一个复选框 -->
            <van-checkbox :name="item.id" v-if="showChecked" />
            <img :src="item.pic" alt="">
            <div class="text">
                <div class="title"> {{ item.title }}</div>
                <!-- 步进器，用于统计菜品数量 -->
                <!-- :default-value="initCountNum" -->
                <van-stepper v-model="item.num" :long-press="true" v-if="!item.add" @change="handleStepper" />
                <!-- 购物车页面 和 店铺页面 会复用此组件,其中此van-icon只有在店铺详情页中存在
                    可以利用showChecked，它在店铺详情页中使用此组件时showChecked：false -->
                <van-icon @click="handleAdd" v-if="item.add && !showChecked" name="add-o" />
            </div>
        </div>
        <div class="price">
            ￥{{ item.price }}
        </div>
    </div>
</template>

<script>
// import { ref, toRefs, reactive, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
    name: "singleFood",
    props: ["item", "showChecked"],
    //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。

    setup(props) {
        const store = useStore()
        const handleAdd = () => {
            props.item.num += 1
            console.log(props.item.num);
            props.item.add = false
        }
        // 修改步进器,修改菜品数量时调用
        const handleStepper = (num) => {
            // 点击步进器, 修改该菜品 原信息中的num
            console.log(props.item.num);
            // 步进器小于1时,显示右侧➕加号按钮
            if (num < 1)
                props.item.add = true
        }
        // 页面开始渲染步进器的初始值
        // const initCountNum = () => {
        //     if (store.state.cartList.length === 0)
        //         return
        //     store.state.cartList.forEach((item) => {
        //         if (item.num === props.item.num) {
        //             console.log(item);
        //             return item.num
        //         }
        //     })
        // }
        return {
            handleAdd,
            handleStepper,
        }
    },

}

</script>

<style lang="less" scoped>
.content-item {
    // margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    .price {
        padding: 20px 15px 0 0;
        font-size: 16px;
        font-weight: 600;
    }

    .left {
        display: flex;
        align-items: center;
        flex: 1;

        img {
            margin-left: 10px;
            width: 60px;
            height: 60px;
            margin-right: 10px;
            border-radius: 10px;
        }

        .text {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            height: 100%;
            position: relative;
            flex: 1;

            .title {
                font-size: 16px;
            }

            .van-icon {
                color: red;
                font-size: 20px;
                position: absolute;
                right: 4px;
                bottom: 4px;
            }
        }
    }
}
</style>