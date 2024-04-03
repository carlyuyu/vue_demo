<template>
  <div class="hello">
    <h1>{{ test }}</h1>
  </div>
</template>

<script>

export default {
  name: 'TestRoute',
  data() {
    return {
      test: '测试组件开发',
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
