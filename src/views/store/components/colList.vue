<template>
    <div class="food-list" v-if="index === 0">
        <!-- click-nav是Vant UI中van-tree-selec组件提供的专门的点击事件
        🟥其默认参数是该tab栏的索引,点击第一个tab栏,其参数就是0 -->
        <van-tree-select v-model:main-active-index="activeIndex" height="88vw" :items="items" @click-nav="navClick">
            <!-- 渲染所有菜单信息 -->
            <template #content>
                <div v-for="(item, index) in subItem" class="item-bg">
                    <singleFood :item="item" :showChecked="false" />
                </div>
            </template>

        </van-tree-select>
    </div>
    <div v-else>{{ MenuItem.content }}</div>
</template>

<script>
import singleFood from '../../../components/singleFood.vue'
import { toRefs, reactive } from 'vue'
export default {
    name: "MenuItem",
    components: { singleFood },
    // footData === MenuItema
    props: ["MenuItem", "index"],
    setup(props) {
        let data = reactive({
            activeIndex: 0,
            items: [],
            subItem: []
        })
        // 初始化列tab栏中的内容,将数据赋值给data.items完成渲染操作
        const initData = () => {
            let newArray = [];
            // 由于此项目的店铺页面中只制作了点菜页面,评价和商家页面是渲染一个title
            // 但是此函数操作是从父组件中传递的MenuItem中筛选列tabs栏的数据
            // 对于评价和商家页面,只做简单显示<div v-else>{{ MenuItem.content }}</div>
            // 因此传递的MenuItem数据是空的, 无法进行筛选
            // 若点击评价和商家,其van-tab传递对应的MenuItem数据就是undefined,下方操作报错
            // 所以需要添加可选链操作,保证数据有才进行筛选提取
            props.MenuItem?.items?.forEach((item, index) => {
                newArray.push({
                    text: item.text,
                })
                // 根据点击对应的 列tab栏 ,就将该tab对应的children数据拿到,用于渲染每个商品信息
                if (data.activeIndex === index)
                    data.subItem = item.children;
            });
            data.items = newArray
        }
        const navClick = (i) => {
            // 🟥其默认参数是该tab栏的索引,点击第一个tab栏,其参数就是0 -->
            // console.log(i);
            data.activeIndex = i
            initData()
        }
        initData()

        return {
            ...toRefs(data),
            navClick
        };
    },

}

</script>

<style lang="less" scoped></style>