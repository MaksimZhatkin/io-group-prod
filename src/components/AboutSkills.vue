<template>
<div>
  <label>
    <input
      type="checkbox"
      class="visually-hidden"
      v-bind:checked="!!hardSkill.default"
    >
    <span class="check-box"/>
    {{hardSkill.skillName}}
  </label>
</div>
</template>

<script>
export default {
  name: 'AboutSkills',
  props: ['hardSkill'],
};
</script>

<style lang="scss" scoped>
div {
  margin-bottom: .444rem;
}

label {
  position: relative;
  cursor: pointer;
  font-size: 1.166rem;
  font-weight: bold;
  padding-left: 1.2em;
  line-height: 1.222rem;
}

input {
  position: absolute;
}

.check-box {
  position: absolute;
  margin-left: -1.2em;
  width: 1.111rem;
  height: 1.111rem;
  background: url('../assets/img/checkbox.png') no-repeat;
}

/* Checked */
input:checked + .check-box {
  top: -7px;
  width: 24px;
  height: 28px;
  background: url('../assets/img/checkbox_checked.png') no-repeat;
}
</style>
