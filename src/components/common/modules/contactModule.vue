<template>
  <div class="contact-module">
    <h3 class="title container">Контакты</h3>
    <div class="contact-module__map" id="map"></div>
  </div>
</template>

<script>
import DG from "2gis-maps";

export default {
  name: "contactModule",
  mounted() {
    DG.then(function () {
      DG.map('map', {
        center: [54.98, 82.89],
        zoom: 13
      });
    });
  }
}
</script>

<style lang="scss" scoped>
.contact-module {

  &__map {
    margin: 30px 0;
    height: 300px;
    width: 100%;
  }

}
</style>