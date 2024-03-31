<template>
    <div class="header">
        <van-icon name="arrow-left" class="icon" @click="goBack" />
        <div>{{ title }}</div>
        <!-- 购物车页面会显示 💡编辑 按钮 -->
        <!-- :class="{ editcolor: isEdit }"表示isEdit值为真，即处于编辑状态时使用editcolor样式 -->
        <div v-if="edit" class="edit" @click="handleIsEdit" :class="{ editcolor: !store.state.isEdit }">
            {{ store.state.isEdit ? "编辑" : "完成" }}
        </div>
    </div>
</template>
<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'

export default {
    name: 'Header',
    props: ["title", "edit"],
    setup() {
        const router = useRouter()
        const store = useStore()
        const goBack = () => {
            router.back()
        }
        // 购物车页面点击编辑按钮的事件回调
        const handleIsEdit = () => {
            if (store.state.cartList.length) {
                store.commit('changeIsEdit')
            }
            else showToast('请添加商品到购物车！')
        }
        return {
            store,
            goBack,
            handleIsEdit
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    background-color: #fff;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #d7d7d7;

    .edit {
        font-size: 16px;
        position: absolute;
        right: 15px;
        font-weight: normal;
    }

    .icon {
        position: absolute;
        left: 10px;
    }
}

.editcolor {
    color: #ffc400;
}
</style>