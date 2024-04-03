<template>
  <div class="up">
    <p>{{ profile}}</p>
    <button @click="goBack">返回</button>
  </div>
</template>

<script>

export default {
  name: 'UserProfile',
  data() {
    return {
      profile: '用户信息',
    }
  },
  created() {
    console.log(this.profile);
  },
  computed:{
  },
  methods:{
    goBack(){
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
