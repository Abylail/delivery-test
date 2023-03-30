<template>
  <div class="base-input">
    <input
        class="base-input__input"
        :value="value"
        :placeholder="placeholder"
        @blur.stop="$emit('blur')"
        @input.stop="inputHandle($event.target.value)"
    />
    <base-icon class="base-input__icon" sprite>search</base-icon>
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon";
export default {
  name: "BaseInput",
  components: {BaseIcon},
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
  },
  methods: {
    // Ввод
    inputHandle(text) {
      this.$emit("input", text);
    }
  }
}
</script>

<style lang="scss" scoped>
.base-input {
  display: flex;
  position: relative;
  overflow: visible;

  &__input {
    display: inline-block;
    flex: 1;
    padding: 15px 15px 15px 52px;
    margin: 0;
    border: 1px solid $color--light-gray;
    background: white;
    border-radius: 12px;
  }

  &__icon {
    position: absolute;
    left: 16px;
    top: 12px;
    box-sizing: border-box;
  }
}
</style>