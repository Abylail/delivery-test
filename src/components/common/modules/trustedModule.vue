<template>
  <div class="trusted-module container">
    <h3 class="title">Нам доверяют</h3>

    <div class="trusted-module__list">
      <a class="trusted-module__item" href="https://partner.com" v-for="(partner, index) in partners" :key="index">
        <base-icon>{{ partner.image }}</base-icon>
      </a>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon";
export default {
  name: "trustedModule",
  components: {BaseIcon},
  data: () => ({
    partners: [{image: "partner logo.png"}, {image: "partner logo-1.png"}, {image: "partner logo-2.png"}, {image: "partner logo-3.png"}, {image: "partner logo-4.png"}, {image: "partner logo-5.png"}, {image: "partner logo-6.png"}, {image: "partner logo-7.png"}]
  })
}
</script>

<style lang="scss" scoped>
.trusted-module {

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__item {
    display: block;
    margin: 0 auto 24px;
  }

}
</style>