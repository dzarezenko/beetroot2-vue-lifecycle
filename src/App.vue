<template>
  <div id="app">
    <input type="text" ref="inputField" />
    <h1>{{ title }}</h1>
    <button @click="changeTitle">Press Me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      title: "Hello World!!!",
    }
  },
  methods: {
    /*input(event) {
      this.message = event.target.value;
      console.log(this.message);
    },*/
    changeTitle() {
      this.title = this.$refs.inputField.value //this.message;
    }
  },
  mounted() {
    console.log(this);
  }
}
</script>
