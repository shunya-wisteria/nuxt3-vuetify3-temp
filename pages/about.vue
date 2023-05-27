<template>
  <v-container class="main">
    <h1 v-text="title"></h1>
    <section>
      <h2>このページについて</h2>
      <p>このページに関する概要説明です。〇〇について〇〇の視点から適当につらつらと書いていく感じで、概要説明を続けていく。</p>
    </section>
    <section>
      <h2>著者について</h2>
      <h3>AB山 CD郎</h3>
      <p>〇〇で〇〇な〇〇。</p>
      <h3>略歴</h3>
      <h4>19XX.YY.MM 誕生</h4>
      <h4>20XX.YY.MM 上京</h4>
      <p>〇〇をきっかけに上京、〇〇に居を構える</p>
      <h4>20XX.YY.MM 〇〇を始める</h4>
      <h4>20XX.YY.MM 現在に至る</h4>
    </section>
  </v-container>
</template>

<script setup>
import { inject, ref } from "vue";
import StoreKey from "../store/key";
// Store
const store = inject(StoreKey);

onMounted(() => store.pageTitle = "About")
const title = computed(()=> store.pageTitle)
const headTitle = computed(()=>store.headTitle)
useHead({
  title : headTitle
})
</script>