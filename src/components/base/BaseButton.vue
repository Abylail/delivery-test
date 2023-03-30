<template>
  <button
      class="base-button"
      :style="{width, height}"
      v-bind="$attrs"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    height: {
      type: String,
      default: null
    },
    width: {
      type: [String],
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  text-align: center;
  padding: 12px 16px;
  width: 100%;
  background: $color--red;
  color: white;
  border-radius: 12px;
  border: none;
}
</style>