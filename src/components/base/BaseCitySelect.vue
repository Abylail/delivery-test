<template>
  <div class="base-city-select">

    <div class="base-city-select__input-wrapper">
      <base-input
          :value="inputText"
          :placeholder="placeholder"
          @blur="onBlur()"
          @input="inputHandle($event)"
      />

      <!-- Выпадающий список для выбора города -->
      <slide-transition>
        <div class="base-city-select__dropdown" v-if="dropdownList">
          <div
              class="base-city-select__dropdown-item"
              v-for="city in dropdownList" :key="city.id"
              @click="selectHandle(city)"
          >{{ city.address }}</div>
          <div class="base-city-select__dropdown-notfound" v-if="!dropdownList.length">Не найдено</div>
        </div>
      </slide-transition>
    </div>

    <!-- Быстрый выбор корода -->
    <div class="base-city-select__chips">
      <button
          class="base-city-select__chip"
          :class="{'base-city-select__chip--selected': selected === city.id}"
          v-for="city in fastSelectList" :key="city.id"
          @click="selectHandle(city)"
      >{{ city.address }}</button>
    </div>

  </div>
</template>

<script>
import SlideTransition from "@/components/transitions/SlideTransition";
import BaseInput from "@/components/base/BaseInput";
export default {
  name: "BaseCitySelect",
  components: {BaseInput, SlideTransition},
  data: () => ({
    inputText: null,

    // Список для выбора города
    dropdownList: null,
  }),
  props: {
    placeholder: {
      type: String,
      default: null
    },
    list: { // Список городов
      type: Array,
      default: () => []
    },
    selected: { // Выбранный id
      type: Number,
      default: null
    }
  },
  computed: {
    // Список для быстрого выбора
    fastSelectList() {
      let list = this.list.slice(0, 3);
      // Заменяю первый чип на выбранный (что бы визульно было видно что выбрал)
      if (this.selected && !list.some(city => city.id === this.selected)) list[0] = {id: this.selected, address: this.inputText}
      return list;
    },
  },
  watch: {
    // Изменяю значение инпута на выбор
    selected(val) {
      if (val !== null) this.inputText = this.list.find(city => city.id === val)?.address || null;
      else this.inputText = null;
    }
  },
  methods: {
    // Ручной ввод
    inputHandle(text) {
      if (this.selected !== null) this.$emit("update:selected", null);
      this.inputText = text;
      this.createDropdown(text);
    },

    onBlur() {
      this.dropdownList = null;
      if (!this.selected) this.inputText = null;
    },

    // Выбрать город
    selectHandle(city) {
      this.dropdownList = null;
      this.$emit("update:selected", city?.id || null);
    },

    // Создать выпадающий список
    createDropdown(searchText) {
      if (!searchText) {
        this.dropdownList = null;
        return;
      }
      const caseInsensetive = searchText.toLowerCase();
      this.dropdownList = this.list.filter(city => city.address.toLowerCase().includes(caseInsensetive))
    }
  }
}
</script>

<style lang="scss" scoped>
.base-city-select {
  display: inline-block;
  width: 100%;

  &__input-wrapper {
    position: relative;
  }

  &__chips {
    display: flex;
    flex-wrap: wrap;
    @media (max-width: $mobile-break-point) {display: none;}
  }

  &__chip {
    display: inline-block;
    border-radius: 20px;
    padding: 6px 12px;
    margin-top: 12px;
    margin-right: 12px;
    background: $color--background-gray;

    &--selected {
      background: $color--red;
      color: white;
    }
  }

  &__dropdown-notfound {
    color: gray;
    background: white;
    padding: 12px;
    width: 100%;
  }

  &__dropdown {
    z-index: 10;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));
    border-radius: 12px;
    overflow: hidden;
  }

  &__dropdown-item {
    background: white;
    padding: 12px;
    width: 100%;
    cursor: pointer;
    &:hover {
      background: $color--background-gray;
    }
  }
}
</style>