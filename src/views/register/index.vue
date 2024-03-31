<template>
  <div class="login">
    <Header title="注册" />
    <div class="img">买团</div>

    <!--  表单区域 -->
    <van-form @submit="onSubmit">
      <!-- 账号 -->
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <!-- 密码 -->
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <!-- 按钮 -->
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          color="#ffc400"
        >
          注册
        </van-button>
        <van-button
          round
          block
          type="info"
          color="#ffc400"
          class="register"
          @click="toLogin"
          >去登陆</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import Header from '../../components/Footer.vue'
import { reactive, toRefs, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { showToast } from 'vant'

export default {
  components: { Header },
  setup(props) {
    const router = useRouter()
    let data = reactive({
      username: '',
      password: '',
    })

    // 点击注册按钮的回调
    //      1.首先检测注册的用户名是否已经存在了，若存在则toast提示已存在
    //      2.若不存在，则直接调用register()
    const onSubmit = (value) => {
      console.log(value)
      // 检测本地存储中是否有用户的账号信息
      if (localStorage.userInfo) {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        // 用户名是否已经存在了
        if (userInfo['username'] === value['username']) {
          showToast('该用户已经存在')
          return
        }
        // 用户名不存在，可以注册⚠️❓但是register（）调用会覆盖账号密码，只能注册一个
        //      KEY: userInfo	 VALUE: { "username": "23", "pass": "23" }
        else register(value)
      }
      // 本地存储没有内容，可以注册
      else register(value)
    }

    // 注册成功后的回调，👆点击注册按钮时使用到
    const register = (value) => {
      // 本地存储只能存储字符串信息
      localStorage.setItem('userInfo', JSON.stringify(value))
      showToast('注册成功')
      router.push('/login')
    }

    const toLogin = () => {
      router.push('/login')
    }
    return {
      ...toRefs(data),
      onSubmit,
      toLogin,
      register,
    }
  },
}
</script>

<style lang="less" scoped>
.login {
  .img {
    width: 200px;
    height: 200px;
    background-color: #ffc400;
    font-size: 80px;
    line-height: 200px;
    text-align: center;
    border-radius: 40px;
    margin: 20px auto;
  }

  .register {
    margin-top: 20px;
  }
}
</style>
