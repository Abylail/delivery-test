<template>
  <svg class="base-icon" v-if="sprite" :height="iconHeight" :width="iconWidth">
    <use :xlink:href="src"></use>
  </svg>
  <img v-else :alt="slotText" :src="src" :height="height" :width="width">
</template>

<script>
const defaultSize = 24; // Если не указано

export default {
  name: "BaseIcon",
  props: {
    height: {
      type: [Number, String],
      default: null
    },
    width: {
      type: [Number, String],
      default: null
    },
    sprite: { // Картинка из спрайта ?
      type: Boolean,
      default: false
    }
  },
  computed: {

    // Высота картинки
    iconHeight() {
      return this.height || this.width || defaultSize;
    },

    // Высота картинки
    iconWidth() {
      return this.width || this.height || defaultSize;
    },

    // Текст из слота
    slotText() {
      return this.$slots.default()?.[0]?.children
    },

    // Иконка
    src() {
      if (this.sprite) return require("@/assets/images/sprite.svg") + `#${this.slotText}`
      return require(`@/assets/images/${this.slotText}`)
    }
  }
}
</script>

<style scoped>

</style>
