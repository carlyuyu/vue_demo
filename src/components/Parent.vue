<template>
  <div class="pp">
    <!-- prop动态属性绑定 -->
    <p class="ff">父接收到的子组件信息:{{ username }}</p>
    <child :name="name" :age="age" :kong="kong" @childEvent="getChild"></child>
    <!-- 组件必须用div包裹起来 -->
  </div>
</template>

<script>

import Child from '@/components/Child';
export default {
  components:{
    Child,
  },
  name: 'Parent',
  data() {
    return {
      name: '杨过',
      age:33,
      kong:'黯然销魂掌',
      username:''
    }
  },
  created() {
    console.log(this.name);
  },
  methods:{
    getChild(data){
      console.log(data);
      this.username = data;
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
.ff{
  color:blue;
}
</style>
