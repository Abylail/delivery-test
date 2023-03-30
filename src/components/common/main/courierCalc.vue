<template>
  <div class="courier-calc">

    <div class="courier-calc__main">
      <div class="courier-calc__from">
        <base-city-select placeholder="Откуда" v-model:selected="from" :list="cities"/>
      </div>

      <div class="courier-calc__change">
        <button @click="changeHandle()"><base-icon sprite>arrow-left-right</base-icon></button>
      </div>

      <div class="courier-calc__to">
        <base-city-select placeholder="Куда" v-model:selected="to" :list="cities"/>
      </div>

      <div class="courier-calc__submit">
        <base-button height="48px" @click="submitHandle()">Вызвать курьера</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseCitySelect from "@/components/base/BaseCitySelect";
import BaseIcon from "@/components/base/BaseIcon";
import BaseButton from "@/components/base/BaseButton";
import {mapGetters} from "vuex";

export default {
  name: "courierCalc",
  components: {BaseButton, BaseIcon, BaseCitySelect},
  data: () => ({
    // Откуда
    from: null,

    // Куда
    to: null,
  }),
  computed: {
    ...mapGetters({
      cities: "cities/getCities",
    })
  },
  methods: {

    // Поменять местами
    changeHandle() {
      const to = this.to;
      this.to = this.from;
      this.from = to;
    },

    // На вызов
    submitHandle() {
      alert("Пусто модуль");
    },
  }
}
</script>

<style lang="scss" scoped>
.courier-calc {
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
}
</style>