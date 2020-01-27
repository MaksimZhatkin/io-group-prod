<template>
<div id="app">
  <div class="wrapper">
    <Container />
  </div>
</div>
</template>

<script>
import Container from './components/Container.vue';

export default {
  name: 'app',
  components: {
    Container,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background:  url("./assets/img/white-paper-texture.jpg");
  font-family: 'PT Sans', sans-serif;
}

.wrapper {
  margin: 15px auto;
  max-width: 1001px;
  background: url("./assets/img/background.jpg");
  display: flex;
  padding: 50px 114px 150px 118px;
}
</style>
