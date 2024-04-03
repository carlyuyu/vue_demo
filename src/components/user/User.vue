<template>
  <div class="pp">
    <p :userid="userid">{{ $route.params.id }}</p>
    <router-link :to="{name:'UserProfile'}">去用户信息组件</router-link>
    <router-link :to="{path:'/user/'+$route.params.id,query:{action:'add'}}">去用户博客组件</router-link>
    <button @click="goBack">返回</button>
  </div>
</template>

<script>

export default {
  name: 'User',
  data() {
    return {
      test: '用户路有建树',
    }
  },
  created() {
    console.log(this.test);
    console.log(this.$route.path);
  },
  computed: {
    userid() {
      return this.$route.params.id;
    }
  },
  methods: {
    /*     // 字符串
    router.push('home')
    
    // 对象
    router.push({ path: 'home' })
    
    // 命名的路由
    router.push({ name: 'user', params: { userId: '123' }})
    
    // 带查询参数，变成 /register?plan=private
    router.push({ path: 'register', query: { plan: 'private' }}) */
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
