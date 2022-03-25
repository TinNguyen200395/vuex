<template>
  <div class="navbar">
    <h1>My Vuex App Todos</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="getAuth.isAuthenticated">
        Total Todo: {{getList.length}}
        <button @click="loginOrLogout">Logout</button>
      </li>
        <button v-else @click="loginOrLogout">Login </button>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component
export default class Navbar extends Vue {
  @Getter getList!: any[];
  @Getter getAuth!:any
  loginOrLogout(){
    this.$store.commit('TOGGLE_AUTH')
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>
