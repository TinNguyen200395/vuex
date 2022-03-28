<template>
  <div class="status-bar">
  <p>Done</p>
  <ul>
      <!-- Lọc ra những filter từ todo.completed -->

     <li v-for="todo in getListDone" :key="todo.id">
         {{todo.title}}
          </li>
  </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component
export default class StatusBar extends Vue {
  @Getter getListDone!: any[]

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
</style>
