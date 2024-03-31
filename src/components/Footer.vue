<template>
  <div class="footer">
    <div class="item">
      <router-link
        to="/"
        class="nav-item"
        active-class="nav-color"
      >
        <van-icon
          name="home-o"
          size="30"
        />
        <span> 首页 </span>
      </router-link>
    </div>
    <div class="item">
      <router-link
        to="/cart"
        class="nav-item"
        active-class="nav-color"
      >
        <van-icon
          name="cart-o"
          size="30"
        />
        <span> 购物车 </span>
      </router-link>
    </div>
    <div class="item">
      <router-link
        to="/order"
        class="nav-item"
        active-class="nav-color"
      >
        <van-icon
          name="orders-o"
          size="30"
        />
        <span> 订单 </span>
      </router-link>
    </div>
    <div class="item">
      <router-link
        to="/mine"
        class="nav-item"
        active-class="nav-color"
      >
        <van-icon
          name="contact"
          size="30"
        />
        <span> 我的 </span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'Footer',
}
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  background: #fff;
  border-top: 0.5px solid #eee;
  padding: 5px 0;

  .item {
    flex: 1;

    .nav-color {
      color: #ffc400;
    }

    .nav-item {
      display: flex;
      flex-flow: column;
      align-items: center;

      span {
        font-size: 14px;
      }
    }
  }
}
</style>
