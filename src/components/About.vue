<template>
<div class="inner-container">
  <AboutIntro/>
  <div class="skills">
    <AboutSkills
      v-for="(hardSkill, index) of hardSkills"
      :hardSkill="hardSkill"
      :key="index"
    />
  </div>
</div>
</template>

<script>
import AboutIntro from './AboutIntro.vue';
import AboutSkills from './AboutSkills.vue';

export default {
  name: 'About',
  props: ['hardSkills'],
  components: {
    AboutIntro,
    AboutSkills,
  },
};
</script>

<style lang="scss" scoped>
.inner-container {
  margin-bottom: 1.5rem;
}

.skills {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}
</style>
