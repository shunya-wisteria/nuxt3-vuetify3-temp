<template>
  <v-app>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <!-- <v-footer
      :absolute="fixed"
      app
      color="#f5f5f5"
    >
      <span style="font-family: 'Didact Gothic'; margin-right:5px;" class="text-primary"> {{ appName }} </span>
      <span style="font-size:70%;">（app : {{appId}}）</span>
    </v-footer> -->

    <v-dialog
      v-model="modalContent.enabled"
      max-width="290"
      :persistent=true
      style="z-index: 9999;"
    >
    <v-card>
      <v-card-title>{{ modalContent.title }}</v-card-title>
      <v-card-text
        v-html="modalContent.body"
        style="font-size: 90%;"
      >
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn v-on:click="store.setModal({enabled:false, title:'', body : ''})" class="bg-accent text-white">OK</v-btn>
      </v-card-actions>
    </v-card>
    </v-dialog>

  </v-app>
</template>

<script setup>
import { ref, reactive, inject } from 'vue'
import StoreKey from "../store/key";

//--- Begin of Local variant ---
const env = ref(process.env.NODE_ENV)
const enabled = true
//--- End of Local variant ---

//--- Begin of Store Loading ---
const store = inject(StoreKey);
//--- End of Store Loading ---

// --- Begin of Store variant use ---
const appName = computed(() => store.appName)
const appId = computed(() => store.appId)
const title = computed(() => store.siteTitle)

const modalContent = computed(() => store.modalContent)
// --- End of Store variant use ---
</script>
