<template>
  <div class="landing-page">
    <my-header :links="modules"/>
    <main-module id="main"/>
    <advantages-module id="advantages"/>
    <history-module id="history"/>
    <trusted-module id="trusted"/>
    <contact-module id="contacts"/>
    <my-footer/>
  </div>
</template>

<script>
import MyHeader from "@/components/common/layout/myHeader";
import MainModule from "@/components/common/modules/mainModule";
import AdvantagesModule from "@/components/common/modules/advantagesModule";
import HistoryModule from "@/components/common/modules/historyModule";
import MyFooter from "@/components/common/layout/myFooter";
import TrustedModule from "@/components/common/modules/trustedModule";
import ContactModule from "@/components/common/modules/contactModule";

export default {
  name: 'App',
  components: {ContactModule, TrustedModule, MyFooter, HistoryModule, AdvantagesModule, MainModule, MyHeader},
  data: () => ({
    // Список модулей
    modules: [
      {name: "Главная", code: "main"},
      {name: "Наши преимущества", code: "advantages"},
      {name: "История Exline", code: "history"},
      {name: "Нам доверяют", code: "trusted"},
      {name: "Контакты", code: "contacts"},
    ]
  })
}
</script>

<style>
.landing-page {
  min-height: 100vh;
}
</style>
