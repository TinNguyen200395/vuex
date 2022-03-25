<template>
  <div id="">
    <form @submit="onSubmit">
      <input placeholder="Please input info" type="text" v-model="title" />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class FormTodo extends Vue {
  title = "";
  onSubmit(event: any) {
    event.preventDefault();
    console.log(this.title);
    
  }
 addTodo() {
    this.$store.dispatch("addTodo");
    this.addTodo()
  }  
}
</script>

<style>
form {
  padding: 10px;
}

input[type="text"] {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin: 6px 0;
  background-color: aquamarine;
  border: solid 1px;
}

input[type="submit"] {
  margin: 10px auto;
  padding: 10px;
  border: 0;
  display: block;
}
</style>
