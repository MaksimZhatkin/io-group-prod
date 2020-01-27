<template>
<div>
  <h2> Расскажите о себе чекбоксами</h2>
  <p>Отметьте чекбоксами пункты, которые соответствуют вашим скиллам. Отсутствие опыта не означает,
    что у вас меньше шансов стать одним из наших товарищей. Это означает, что вы будете получать те
    задачи, с которыми гарантировано будете справляться.</p>
</div>
</template>

<script>
export default {
  name: 'AboutIntro',
};
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.333rem;
  margin-bottom: 1.2rem;
}

p {
  color: $subtitle-color;
  font-size: 0.833rem;
}
</style>
