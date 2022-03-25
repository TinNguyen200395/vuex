<template>
  <div id="app">
   <NavBar/>
     <ToDo/>
     <StatusBar/>
     <ProgressBar/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from './components/nav-bar.vue';
import ToDo from './components/Todos.vue';
import StatusBar from './components/status-bar.vue';
import ProgressBar from './components/progress-bar.vue';



@Component({
  components: {
    NavBar,
    ToDo,
    StatusBar,
    ProgressBar
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
