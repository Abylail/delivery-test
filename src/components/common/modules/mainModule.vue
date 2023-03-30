<template>
  <div class="main-module">
    <div class="main-module__banner">
      <div class="main-module__container container">

        <div class="main-module__banner-content">
          <h1 class="main-module__title title">Внутригородская доставка</h1>
          <p class="main-module__description">Курьерская служба Exline предлагает Вашему вниманию услуги по внутригородской доставке отправлений во всех областных центрах Республики Казахстан</p>
          <base-button width="200px">Подробнее</base-button>
        </div>

      </div>
    </div>

    <div class="main-module__calculations container">

    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton";
export default {
  name: "mainModule",
  components: {BaseButton}
}
</script>

<style lang="scss" scoped>
.main-module {

  &__banner {
    height: 480px;
    background: $color--background-gray;
  }

  &__title {
    margin: 0 0 16px;
  }

  &__description {
    margin: 0 0 24px;
  }

  &__container {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__banner-content {
    max-width: 415px;
  }

}
</style>