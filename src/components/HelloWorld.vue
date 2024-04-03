<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>学习必要链接</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
    <ul v-for="(team, index) in teams" :key="team.name">
      <li>{{ team.name }} - {{ index }} - {{ team.age }}</li>
    </ul>
    <span v-for="n in 10">{{ n }} </span>
    <test-route></test-route>
    <router-link to="/parent">去父组件</router-link>
    <router-link to="/child">去子组件</router-link>
    <router-link to="/user/1">去用户组件</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

import TestRoute from '@/components/TestRoute';
export default {
  components: {
    TestRoute: TestRoute,
  },
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      teams: [{ name: 'carl', age: 28 }, { name: 'yuki', age: 27 }]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
