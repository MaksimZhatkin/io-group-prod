<template>
<li>
  <label>
    <span>{{inputProp.label}}</span>
    <input
      spellcheck="false"
      :placeholder=inputProp.placeholder
      :type=inputProp.type
      :value=inputProp.default>
  </label>
</li>
</template>

<script>
export default {
  name: 'ContactsItem',
  props: {
    inputProp: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  color: $primary-font-color;
}

li + li {
  margin-top: 1.666rem;
}

label {
  display: flex;
}

span {
  font-weight: bold;
  font-size: 1.25rem;
  margin-right: 1rem;
  align-self: flex-end;
  line-height: 1.3rem;
  cursor: pointer;
}

input {
  font-size: 1.666rem;
  font-family: "Courier New", sans-serif;
  background: none;
  border: none;
  border-bottom: 2px solid $primary-color;
  flex-grow: 1;
  padding-left: 0.888rem;
  transition: .3s;
  &:focus {
    background-color: $primary-color;
    color: white;
    outline: none;
  }
}
</style>
