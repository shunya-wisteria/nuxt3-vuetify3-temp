<template>
  <v-container class="main">
    <h1 v-text="title"></h1>
    <Username />
  </v-container>
</template>

<script setup>
import { inject, ref } from "vue";
import StoreKey from "../store/key";

//--- Begin of Store Loading ---
const store = inject(StoreKey);
//--- End of Store Loading ---

// --- Begin of Hook ---
onMounted(() => store.pageTitle = "User Name")
const title = computed(() => store.pageTitle)
// --- End of Hook ---
</script>