<template>
  <div class="price-calc">

    <!-- Основные калькуляции -->
    <div class="price-calc__main">
      <div class="price-calc__from">
        <base-city-select placeholder="Откуда" v-model:selected="from" :list="cities"/>
      </div>

      <div class="price-calc__change">
        <button @click="changeHandle()"><base-icon sprite>arrow-left-right</base-icon></button>
      </div>

      <div class="price-calc__to">
        <base-city-select placeholder="Куда" v-model:selected="to" :list="cities"/>
      </div>

      <div class="price-calc__submit">
        <base-button height="48px" @click="calculateHandle()">Расчитать стоимость</base-button>
      </div>
    </div>

    <!-- Нижняя информаця -->
    <slide-transition>
      <div class="price-calc__bottom" v-if="result || errorText">

        <!-- Результат вычислений -->
        <div class="price-calc__result" v-if="result">
          <div class="price-calc__result-item">
            <base-icon class="price-calc__result-icon" height="20">distance-icon.png</base-icon>
            <span>Расстояние:</span>
            <strong>{{ result.distance }} км</strong>
          </div>
          <div class="price-calc__result-item">
            <base-icon class="price-calc__result-icon" height="20">clock-icon.png</base-icon>
            <span>Время:</span>
            <strong>{{ result.time }} ч</strong>
          </div>
          <div class="price-calc__result-item">
            <base-icon class="price-calc__result-icon" height="20">tenge-icon.png</base-icon>
            <span>Стоимость:</span>
            <strong>{{ result.price }} ₸</strong>
          </div>
          <div class="price-calc__refresh"><span @click="refreshHandle()">Сбросить</span></div>
        </div>

        <!-- Ошибка вычислений -->
        <div class="price-calc__error" v-else-if="errorText">{{ errorText }}</div>
      </div>
    </slide-transition>
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon";
import BaseButton from "@/components/base/BaseButton";
import BaseCitySelect from "@/components/base/BaseCitySelect";
import {mapActions, mapGetters} from "vuex";
import SlideTransition from "@/components/transitions/SlideTransition";

export default {
  name: "priceCalc",
  components: {SlideTransition, BaseCitySelect, BaseButton, BaseIcon},
  data: () => ({
    // Откуда
    from: null,

    // Куда
    to: null,

    // Результат расчета {distance, time, price}
    result: null,

    // Текст ошибки
    errorText: null,

    isLoading: false,
  }),
  computed: {
    ...mapGetters({
      cities: "cities/getCities",
    })
  },
  methods: {
    ...mapActions({
      _calculate: "calculator/calculate",
    }),

    // Поменять местами
    changeHandle() {
      const to = this.to;
      this.to = this.from;
      this.from = to;
    },

    // Расчитать
    async calculateHandle() {
      if (this.to === null || this.from === null) return
      this.isLoading = true;
      const {result, err} = await this._calculate({from: this.from, to: this.to});

      this.result = result;
      this.errorText = err;

      this.isLoading = false;
    },

    // Сбросить (кнопка)
    refreshHandle() {
      this.result = null;
      this.errorText = null;
      this.from = null;
      this.to = null;
    }
  }
}
</script>

<style lang="scss" scoped>
.price-calc {
  background: white;
  padding: 20px 30px;

  &__main {
    display: grid;
    grid-template-columns: 1fr auto 1fr 280px;
    @media (max-width: $mobile-break-point) {
      grid-template-columns: auto;
    }
  }

  &__change {
    padding: 10px;
    @media (max-width: $mobile-break-point) {
      text-align: center;
    }
  }

  &__submit {
    padding-left: 24px;
    @media (max-width: $mobile-break-point) {
      padding: 0;
      margin-top: 24px;
    }
  }

  &__result {
    display: grid;
    grid-template-columns: auto auto auto 1fr;
    grid-column-gap: 24px;
    padding-top: 24px;

    @media (max-width: $mobile-break-point) {
      grid-template-columns: auto;
      grid-row-gap: 12px;
    }
  }

  &__result-item {
    display: flex;
    align-items: center;
    & > * {
      margin-right: 5px;
    }
  }

  &__error {
    padding-top: 24px;
    color: $color--red;
  }

  &__refresh {
    cursor: pointer;
    color: $color--red;
    text-align: right;
  }
}
</style>