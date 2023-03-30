<template>
  <footer class="my-footer">
    <div class="my-footer__content container">
      <a href="/"><img class="my-footer__logo" alt="logo" src="@/assets/images/logo.svg"></a>

      <div class="my-footer__socials">
        <a href="/"><base-icon>Social media logo.png</base-icon></a>
        <a href="/"><base-icon>Social media logo-1.png</base-icon></a>
        <a href="/"><base-icon>Social media logo-2.png</base-icon></a>
      </div>

      <div class="my-footer__text">© Все права защищены 2023</div>
    </div>
  </footer>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon";
export default {
  name: "myFooter",
  components: {BaseIcon}
}
</script>

<style lang="scss" scoped>
.my-footer {
  display: flex;
  align-items: center;
  height: 80px;
  background: $color--background-gray;

  &__content {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;
    margin: auto 0;
  }

  &__logo {
    height: 40px;
  }

  &__text {
    text-align: right;
  }
}
</style>