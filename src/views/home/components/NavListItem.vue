<template>
    <div class="tabItem" @click="toStore(i)" v-for="(i, index) in item.data" :key="index">
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
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    name: "NavList",
    props: ['item'],
    setup() {
        const router = useRouter()
        const toStore = (i) => {
            // console.log(router);
            // console.log(i);
            router.push('/store')
        }
        return {
            toStore
        }
    }
}
</script>
<style lang="less" scoped>
.tabItem {
    display: flex;
    width: 95%;
    height: 120px;
    background-color: #fff;
    border-radius: 10px;
    margin: 10px;
    align-items: center;

    .pic {
        margin-top: 10px;
        padding: 15px;

        .p {
            border-radius: 10px;
            width: 100px;
            height: 100px;
        }
    }

    .content {
        padding-top: 5px;
        display: flex;
        flex-flow: column;

        ul {
            li {
                padding-bottom: 8px;
                font-size: 10px;
            }

            li:nth-child(1) {
                font-size: 15px;
                font-weight: 700;
            }

            li:nth-child(4) {
                display: flex;

                .tip {
                    background-color: #f0cf62;
                    padding: 2px;
                    margin-right: 5px;
                    border-radius: 3px;
                    font-weight: 200;
                }
            }
        }
    }
}
</style>