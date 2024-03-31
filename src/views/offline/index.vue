<template>
  <div class="offline">
    <Header :title="title" />
    <div class="content">
      <div class="img">
        <img
          src="../../assets/offline.png"
          alt=""
        />
      </div>
      <div>您还没有登录，请登录后查看</div>
      <button @click="toLogin">登录/注册</button>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { ref, onUpdated, onMounted } from 'vue'
export default {
  name: 'online',
  components: { Header, Footer },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const title = ref('')
    const toLogin = () => {
      router.push('login')
      // console.log(route)
    }
    const initTitle = () => {
      // console.log(route.query)
      let a = ''
      for (let i = 1; i < Object.values(route.query).length; i++) {
        a += route.query[i]
      }
      // console.log(a)
      title.value = a
    }
    onUpdated(() => {
      initTitle()
    })
    // onMounted(() => {
    //   initTitle()
    // })
    return {
      title,
      toLogin,
    }
  },
}
</script>
<style lang="less" scoped>
.offline {
  height: 100%;
  display: flex;
  flex-flow: column;
  background-color: #fff;
  .content {
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
    .img {
      height: 263px;
      width: 347px;
    }
    div {
      font-size: 14px;
      color: #7e7d7a;
      margin: 10px 0 20px 0;
    }
    button {
      font-size: 20px;
      line-height: 20px;
      background: #ffc400;
      height: 50px;
      width: 200px;
      color: #000;
      border-radius: 10px;
    }
  }
}
</style>
