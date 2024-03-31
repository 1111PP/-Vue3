<template>
    <div>
        <!-- 横向tabs栏 -->
        <van-tabs color="#ffc400">
            <van-tab v-for="(item, index) in storeData" :title="item.name" :key="index">
                <!-- 纵向tabs栏 以及 各商品信息 
                    🟥tabs栏若点击第n个，则会将storeData中第n组数据传递给item -->
                <colList :index="index" :MenuItem="item.data">
                </colList>
            </van-tab>

        </van-tabs>

    </div>
</template>

<script>
import { toRefs, reactive } from 'vue';
import colList from './colList.vue'
export default {
    name: 'MenuList',
    components: {
        colList,
    },
    props: [
        "storeData"
    ]

}

</script>
<style lang="less" scpoed ></style>