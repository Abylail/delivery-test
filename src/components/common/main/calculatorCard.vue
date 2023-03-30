<template>
  <div class="calculator-card">

    <!-- Табы -->
    <div class="calculator-card__tabs">
      <button
          class="calculator-card__tab"
          :class="{'calculator-card__tab--active': selectedTab === tab.code}"
          v-for="tab in tabs" :key="tab.code"
          @click="selectedTab = tab.code"
      >{{ tab.name }}</button>
    </div>

    <!-- Основная область для вычислений и тд -->
    <div class="calculator-card__content">
      <price-calc v-if="selectedTab === tabEnum.price"/>
      <trace-calc v-else-if="selectedTab === tabEnum.trace"/>
      <courier-calc v-else-if="selectedTab === tabEnum.courier"/>
    </div>
  </div>
</template>

<script>
import PriceCalc from "@/components/common/main/priceCalc";
import TraceCalc from "@/components/common/main/traceCalc";
import CourierCalc from "@/components/common/main/courierCalc";
const tabEnum = Object.freeze({price: "price", courier: "courier", trace: "trace"})
export default {
  name: "calculatorCard",
  components: {CourierCalc, TraceCalc, PriceCalc},
  data: () => ({

    // Список табов
    tabs: [
      {name: "Расчитать стоимость",  code: tabEnum.price},
      {name: "Вызвать курьера",  code: tabEnum.courier},
      {name: "Отследить посылку",  code: tabEnum.trace},
    ],

    // Коды табов
    tabEnum,

    // Выбранный код таба
    selectedTab: tabEnum.price,
  }),

}
</script>

<style lang="scss" scoped>
.calculator-card {
  position: relative;
  top: -100px;
  filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));
  border-radius: 12px;
  margin-bottom: -100px;

  &__tabs {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
  }

  &__tab {
    display: inline-block;
    padding: 15px 20px;
    cursor: pointer;
    background: $color--background-gray;
    white-space: nowrap;

    &:first-child {
      border-top-left-radius: 12px;
    }

    &:last-child {
      @media (max-width: $mobile-break-point) {
        border-top-right-radius: 12px;
      }
    }

    &--active {
      color: $color--red;
      background: white;
    }
  }

  &__content > * {
    border-radius: 0 12px 12px 12px;
    @media (max-width: $mobile-break-point) {border-radius: 0 0 12px 12px;}
  }

}
</style>