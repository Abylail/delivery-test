<template>
  <div class="main-module">
    <div class="main-module__banner">
      <div class="main-module__container container">

        <div class="main-module__banner-content">
          <h1 class="main-module__title title">Внутригородская доставка</h1>
          <p class="main-module__description">Курьерская служба Exline предлагает Вашему вниманию услуги по внутригородской доставке отправлений во всех областных центрах Республики Казахстан</p>
          <base-button width="200px">Подробнее</base-button>
        </div>

        <base-icon class="main-module__image">gazel.png</base-icon>
      </div>
      <div class="main-module__bigcircle"></div>
    </div>

    <calculator-card class="main-module__calculations container"/>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton";
import CalculatorCard from "@/components/common/main/calculatorCard";
import {mapActions} from "vuex";
import BaseIcon from "@/components/base/BaseIcon";
export default {
  name: "mainModule",
  components: {BaseIcon, CalculatorCard, BaseButton},
  data: () => ({
    isLoading: false,
  }),
  methods: {
    ...mapActions({
      _fetchCities: "cities/fetchCitiesList",
    }),

    // Запросить список городов
    async fetchCities() {
      this.isLoading = true;
      /* await */ this._fetchCities();
      this.isLoading = false;
    }
  },
  mounted() {
    this.fetchCities();
  }
}
</script>

<style lang="scss" scoped>
.main-module {

  &__banner {
    height: 480px;
    background: $color--background-gray;
    overflow: hidden;
    position: relative;
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
    justify-content: space-between;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  &__banner-content {
    position: relative;
    max-width: 415px;
    overflow: hidden;
  }

  &__image {
    width: calc(85% - 415px);
    position: relative;
    z-index: 2;
    @media (max-width: $mobile-break-point) {display: none;}
  }

  &__bigcircle {
    display: block;
    position: absolute;
    content: "";
    background: $color--purple;
    width: 733px;
    height: 733px;
    left: 70%;
    top: -127px;
    border-radius: 100%;
    @media (max-width: $mobile-break-point) {display: none;}
  }

}
</style>