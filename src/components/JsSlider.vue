<template>
<div class="inner-container">
  <h2>Уровень владения JavaScript</h2>
  <div class="slider-container">
    <input type="range" min="1" max="100" value="40">
  </div>
  <img src="../assets/img/slider-map.png" alt="slider">
  <div class="level-container">
    <span class="level-1">
      Не владею
    </span>
    <span class="level-2">
      Использую готовые решения
    </span>
    <span class="level-3">
      Использую готовые решения <br>
      и умею их переделывать
    </span>
    <span class="level-4">
      Пишу сложный JS с нуля
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'JsSlider',
};
</script>

<style lang="scss" scoped>
h2{
  margin-bottom: 1.5rem;
}

.inner-container{
  margin-bottom: 2rem;
}

.slider-container {
  position: relative;
  margin-bottom: -5px;
}

input {
  display: block;
  width: 100%;
  position: absolute;
  appearance: none;
  background: transparent;
  outline: none;
  cursor: pointer;
}

input::-ms-track {
  width: 100%;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

/* WebKit/Blink */
input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
  border: 14px solid transparent;
  border-top: 20px solid $primary-color;
  cursor: pointer;
}

/* Firefox */
input::-moz-range-thumb {
  width: 15px;
  border: 14px solid transparent;
  border-top: 20px solid $primary-color;
  cursor: pointer;
}

/* IE */
input::-ms-thumb {
  width: 1px;
  border: 17px solid transparent;
  border-top: 27px solid $primary-color;
  cursor: inherit;
}

.level-container {
  display: flex;
  justify-content: space-between;
  font-size: .722rem;
  font-weight: bold;
}

.level-3 {
  margin-left: -27px;
}
</style>
