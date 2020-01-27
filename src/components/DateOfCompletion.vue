<template>
<div>
  <label>
    <h2>Дата заполнения</h2>
    <p> {{ setDate() }}</p>
  </label>
</div>
</template>

<script>
export default {
  name: 'DateOfCompletion',
  data() {
    return {
      date: ' ',
    };
  },
  methods: {
    setDate() {
      const cd = new Date();
      this.date = `${cd.getDate()}.${cd.getMonth() + 1}.${cd.getFullYear()}`;
      return this.date;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
}

h2 {
  display: inline-block;
  font-size: 1.3rem;
  margin-right: 1rem;
}

p {
  display: inline-block;
  font-size: 1.666rem;
  font-family: "Courier New", sans-serif;
  text-align: left;
  border-bottom: 2px solid $primary-color;
  padding-left: 0.888rem;
  min-width: 11.555rem;
}
</style>
