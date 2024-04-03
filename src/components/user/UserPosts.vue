<template>
  <div class="up">
    <p>{{ post }}</p>
    <button @click="goBack">返回</button>
  </div>
</template>

<script>

export default {
  name: 'UserPosts',
  data() {
    return {
      post: '博客信息',
    }
  },
  created() {
    console.log(this.post);
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
