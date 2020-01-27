<template>
<div>
  <a href="http://io-group.ru/">
    <img class="logo-img" src="../assets/img/main-logo.jpg" alt="IO-group logo">
  </a>
  <h1 class="visually-hidden">Дело</h1>
  <img class="case-img" src="../assets/img/case.jpg" alt="case">
  <Contacts :inputProps="inputProps"/>
  <About :hard-skills="hardSkills"/>
  <JsSlider/>
  <DateOfCompletion/>
</div>
</template>

<script>
import Contacts from './Contacts.vue';
import About from './About.vue';
import JsSlider from './JsSlider.vue';
import DateOfCompletion from './DateOfCompletion.vue';


export default {
  name: 'Container',
  components: {
    Contacts,
    About,
    JsSlider,
    DateOfCompletion,
  },
  data() {
    return {
      inputProps: [
        {
          id: 0, label: 'Полное ФИО', placeholder: 'Иванов Иван Иванович', default: 'Жаткин Максим Григорьевич', type: 'text',
        },
        {
          id: 1, label: 'Год рождения', placeholder: '1990', default: '2000', type: 'number',
        },
        {
          id: 2, label: 'Место жительства', placeholder: 'г. Томск', default: 'г. Томск', type: 'text',
        },
        {
          id: 3, label: 'Скайп', placeholder: 'ivanov', default: '-', type: 'text',
        },
        {
          id: 4, label: 'Почта', placeholder: 'ivanov@gmail.com', default: 'maksim.zhatkin@gmail.com', type: 'e-mail',
        },
      ],
      hardSkills: [
        { skillName: 'HTML', default: 'checked' },
        { skillName: 'jQuery', default: '' },
        { skillName: 'Адаптивная верстка', default: 'checked' },
        { skillName: 'CSS', default: 'checked' },
        { skillName: 'Vue.js', default: 'checked' },
        { skillName: 'Верстка писем', default: '' },
        { skillName: 'SCSS (SASS)', default: 'checked' },
        { skillName: 'Nuxt.js', default: '' },
        { skillName: 'PHP', default: '' },
        { skillName: 'BEM', default: 'checked' },
        { skillName: 'Git', default: 'checked' },
        { skillName: 'MySQL', default: '' },
      ],
    };
  },
};
</script>

<style lang="scss" src="../assets/styles/utils.scss"/>
<style lang="scss" src="../assets/styles/variables.scss"/>
<style lang="scss" scoped>
div {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
}

.logo-img {
  width: 77px;
}

.case-img {
  align-self: center;
  margin: 37px 0 50px;
}
</style>
