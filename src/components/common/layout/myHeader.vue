<template>
  <header class="my-header">
    <div class="my-header__container container">

      <!-- Левая -->
      <div class="my-header__left">
        <a href="/"><img class="my-header__logo" alt="logo" src="@/assets/images/logo.svg"></a>
      </div>

      <!-- Правая -->
      <div class="my-header__right">
        <!-- Ссылки на модули -->
        <div class="my-header__links">
          <a class="my-header__link"
             v-for="link in links" :key="link.code"
             :href="`#${link.code}`"
          >{{ link.name }}</a>
        </div>
        <!-- Контакты -->
        <div class="my-header__contacts">
          <a class="my-header__contact" href="mailto:info@exline.kz">info@exline.kz</a>
          <a class="my-header__contact" href="tel:77777078777">+7 (777) 707 87 77</a>
        </div>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: "myHeader",
  props: {
    links: { // {name: "Главная", code: "main"}
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.my-header {
  position: sticky;
  top: 0;
  height: 80px;
  background: white;

  &__container {
    display: flex;
    justify-content: space-between;
    height: calc(100% - 16px);
    padding: 8px 0;
  }

  &__right {
    display: flex;
    align-items: center;
    justify-content: right;
  }

  &__logo {
    height: max-content;
  }

  &__links {
    display: flex;
    align-items: center;
    justify-content: right;
    border-right: 1px solid $color--light-gray;
  }

  &__link {
    padding-right: 20px;
  }

  &__contact {
    color: $color--purple;
    padding-left: 20px;
  }

}
</style>