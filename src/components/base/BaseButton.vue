<template>
  <button
      class="base-button"
      :style="{width}"
      v-bind="$attrs"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
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
  width: auto;
  background: $color--red;
  color: white;
  border-radius: 12px;
  border: none;
}
</style>