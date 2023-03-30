<template>
  <div class="trace-calc">
    <div class="trace-calc__main">
      <base-input placeholder="Укажите номер накладной"/>
      <base-button class="trace-calc__submit" @click="submitHandle()">Отследить посылку</base-button>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/base/BaseInput";
import BaseButton from "@/components/base/BaseButton";
export default {
  name: "traceCalc",
  components: {BaseButton, BaseInput},
  methods: {
    // Отследить
    submitHandle() {
      alert("Блок пустой");
    }
  }
}
</script>

<style lang="scss" scoped>
.trace-calc {
  background: white;
  padding: 20px 30px;

  &__main {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-column-gap: 24px;
    @media (max-width: $mobile-break-point) {
      grid-template-columns: auto;
    }
  }

  &__submit {
    margin-top: 24px;
  }

}
</style>