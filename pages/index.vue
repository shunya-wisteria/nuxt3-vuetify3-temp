<template>
  <v-container class="main">
    <h1 v-text="title"></h1>
    <h2>h2:セクション</h2>
    <h3>h3:サブセクション</h3>
    <h4>h4:サブサブセクション</h4>
  </v-container>
</template>

<script setup>
import { inject, ref } from "vue";
import StoreKey from "../store/key";
// Store
const store = inject(StoreKey);

onMounted(() => store.pageTitle = "Top")
const title = computed(() => store.pageTitle)
const headTitle = computed(()=>store.headTitle)
useHead({
  title : headTitle
})

</script>