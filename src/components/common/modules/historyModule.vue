<template>
  <div class="history-module container">
    <h3 class="title">История Exline</h3>

    <div class="history-module__content">
      <div class="history-module__column">
        <div class="history-module__text-block">
          <h4 class="history-module__block-title title">Курьерская компания Exline основана 31 июля 2003 года</h4>
          <p class="history-module__text">За время работы компания Exline заняла достойную нишу на рынке почтовых услуг, зарекомендовав себя как надежного партнера, которому доверяют свои отправления многие компании казахстанского и международного бизнеса</p>
        </div>
        <base-icon class="history-module__image">history-1.png</base-icon>
      </div>
      <div class="history-module__column">
        <base-icon class="history-module__image">history-2.png</base-icon>
        <div class="history-module__text-block">
          <h4 class="history-module__block-title title">Курьерская компания Exline, оказывая доступные услуги всем, предлагает индивидуальный подход к каждому клиенту!</h4>
          <p class="history-module__text">Развивая свой бизнес, мы хотим быть полезными в развитие Вашего бизнеса! Профессиональный опыт сотрудников курьерской компании Exline и опыт наших партнеров дает нам право быть уверенными в том, что наше сотрудничество обеспечит сторонам экономию средств и времени! ExLine — линия надежной доставки!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon";
export default {
  name: "historyModule",
  components: {BaseIcon}
}
</script>

<style lang="scss" scoped>
.history-module {

  &__content {
    display: grid;
    grid-column-gap: 24px;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      grid-row-gap: 24px;
    }
  }

  &__text-block {
    background: $color--background-gray;
    border-radius: 12px;
    padding: 30px;
  }

  &__text {
    margin: 0;
  }

  &__block-title {
    margin: 0 0 30px;
  }

  &__image {
    height: auto;
    width: 100%;
    margin: 0 auto;
  }

  &__column {
    display: grid;
    grid-template-rows: auto 1fr;
    grid-row-gap: 24px;
  }
}
</style>