<template>
  <div >
  <p class="progress-bar">Progress: {{progress}} </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component
export default class ProgressBar extends Vue {
  @Getter progress!: any[];
  

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>
