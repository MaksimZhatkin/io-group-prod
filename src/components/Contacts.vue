<template>
<div class="inner-container">
  <h2 class="visually-hidden">Общая информация</h2>
  <ul>
    <ContactsItem
      v-for="inputProp of inputProps"
      :inputProp="inputProp"
      :key="inputProp.id"
    />
  </ul>
</div>
</template>

<script>
import ContactsItem from './ContactsItem.vue';

export default {
  name: 'Contacts',
  props: ['inputProps'],
  components: {
    ContactsItem,
  },
};
</script>

<style lang="scss" src="../assets/styles/utils.scss"/>
<style lang="scss" scoped>
.inner-container {
  margin-bottom: 3rem;
}
ul {
  list-style: none;
}
</style>
