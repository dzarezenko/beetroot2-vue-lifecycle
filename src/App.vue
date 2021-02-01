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
  beforeCreate() {
    console.log("beforeCreate");
    console.log(window.tronWeb);
  },
  created() {
    console.log("created");
    console.log(window.tronWeb);
  },
  beforeMount() {
    console.log("beforeMount");
    console.log(window.tronWeb);
  },
  mounted() {
    console.log("mounted");
    //console.log(window.tronWeb);
    let game = null;
    setTimeout(function tick() {
      game = window.tronWeb;
      console.log(game);

      if (game == null || game == undefined) {
        setTimeout(tick, 1000);
      }
    }, 0)

    /*setTimeout(() => {
      this.$destroy();
    }, 5000);*/
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  }
}
</script>
