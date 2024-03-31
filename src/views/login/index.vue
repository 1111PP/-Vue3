<template>
  <div class="login">
    <Header title="登录" />
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
          登录
        </van-button>
        <van-button
          round
          block
          type="info"
          color="#ffc400"
          class="register"
          @click="toRegister"
          >去注册</van-button
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
      username: 'admin',
      password: 'admin',
    })

    // 点击注册按钮
    const onSubmit = (value) => {
      console.log(value)
      // 本地存储没内容，说明没有账号密码信息
      if (!localStorage.userInfo) {
        showToast('账号不存在')
        return
      }
      // 有内容需要检测密码是否正确，再挑战到home页面
      else {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        // console.log(userInfo)
        // 若账号或密码都正确
        if (
          userInfo.username === value.username &&
          userInfo.password === value.password
        ) {
          showToast('登录成功')
          // 本地保存isLogin：login（💡可以理解为cookie、session）
          //  🟥它会在路由守卫中校验，检测用户是否登录，若没有检验到isLogin信息则会让用户先登录
          localStorage.setItem('isLogin', 'login')
          router.push('/home')
        }
        // 若账号或密码有一项错误
        else {
          showToast('账号或密码错误')
        }
      }
    }
    const toRegister = () => {
      router.push('register')
    }
    return {
      ...toRefs(data),
      onSubmit,
      toRegister,
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
