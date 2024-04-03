<template>
  <div class="cc">
    <h1>{{ cc }}</h1>
    <button @click="trigerEvent">传值父组件</button>
  </div>
</template>

<script>

export default {
  name: 'Child',
  props: {
    name: {
      type:String,
      required: true
    },
    age: Number,
    Kong: String
  },
  data() {
    return {
      msg: '子组件传给父组件数据',
      cc: '你好啊'
    }
  },
  created() {
    this.cc = this.name;
  },
  methods: {
    trigerEvent() {
      this.$emit('childEvent', this.msg);
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}

.cc {
  color: red;
}
</style>
