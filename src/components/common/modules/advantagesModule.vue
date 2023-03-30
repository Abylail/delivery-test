<template>
  <div class="advantages-module container">
    <h3 class="title">Наши преимущества</h3>

    <div class="advantages-module__list">
      <div class="advantages-module__item" v-for="(advantage, index) in advantages" :key="index">
        <base-icon height="70">{{ advantage.image }}</base-icon>
        <div class="advantages-module__item-text">{{ advantage.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon";
export default {
  name: "advantagesModule",
  components: {BaseIcon},
  data: () => ({
    advantages: [
      {text: "Быстрая доставка", image: "fast-delivery-1.png"},
      {text: "Доставим в любую точку города и области", image: "fast-delivery-2.png"},
      {text: "Ежедневные отправки", image: "fast-delivery-3.png"},
      {text: "Собственный склад", image: "fast-delivery-4.png"},
    ]
  })
}
</script>

<style lang="scss" scoped>
.advantages-module {

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__item {
    display: inline-block;
    text-align: center;
    background: $color--background-gray;
    border-radius: 12px;
    width: 20%;
    padding: 20px 18px;
    margin-bottom: 24px;
    @media (max-width: $mobile-break-point) {
      width: calc(100% - 48px);
      margin: 0 auto 24px;
    }
  }

}
</style>