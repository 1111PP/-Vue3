<template>
  <Header title="账号管理" />

  <div>
    <van-field
      v-model="username"
      label="账号名"
      :readonly="true"
    />
    <van-field
      v-model="sign"
      label="个性签名"
      placeholder="个性签名"
    />
    <van-field
      v-model="password"
      label="修改密码"
      placeholder="请输入修改的密码"
    />
  </div>
  <!-- round圆角样式 block占满一行 -->
  <van-button
    type="primary"
    color="#ffc400"
    round
    block
    class="save-btn"
    @click="save"
    >保存</van-button
  >
  <van-button
    type="primary"
    color="#ffc400"
    round
    block
    class="save-btn"
    @click="logout"
    >退出登录</van-button
  >
</template>

<script>
import Header from '@/components/Header.vue'
import { reactive, toRefs } from 'vue'
import { showToast } from 'vant'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const data = reactive({
      username: 'admin',
      sign: 'crush on you ！ who you?',
      password: '',
    })
    // 修改密码信息
    const save = () => {
      let { username, password } = JSON.parse(localStorage.userInfo)
      // console.log(password)
      //💡若修改密码的文本框有值，则进入修改逻辑
      if (data.password) {
        // 原密码与修改密码data.password相同
        if (password === data.password) {
          showToast('原密码与修改密码相同，请重新输入')
          return
        } else {
          let newPassword = {
            username: username,
            password: data.password,
          }
          // 保存data.password新密码到本地存储中
          localStorage.setItem('userInfo', JSON.stringify(newPassword))
          showToast('修改成功')
          router.push('/mine')
        }
      }
      //若没有直接返回
      else {
        showToast('请输入内容')
        return
      }
    }

    // 退出登录
    //      清除登录时生成的isLogin（💡类似于cookie、session登录密匙）
    const logout = () => {
      localStorage.removeItem('isLogin')
      showToast('退出登录成功')
      router.push('/login')
    }

    return {
      ...toRefs(data),
      save,
      logout,
    }
  },
}
</script>

<style lang="less" scoped>
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}
.save-btn {
  width: 80%;
  margin: 20px auto;
}
</style>
