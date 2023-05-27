<template>
  <v-container class="main">
    <h1 v-text="title"></h1>
    <ChildCounter />
  </v-container>
</template>

<script setup>
import { inject, ref } from "vue";
import StoreKey from "../store/key";

//--- Begin of Store Loading ---
const store = inject(StoreKey);
//--- End of Store Loading ---

// --- Begin of Hook ---
onMounted(() => store.pageTitle = "Counter")
const title = computed(() => store.pageTitle)
const siteTitle = computed(()=>store.siteTitle)
const headTitle = computed(()=>store.headTitle)
useHead({
  title : headTitle
})
// --- End of Hook ---
</script>