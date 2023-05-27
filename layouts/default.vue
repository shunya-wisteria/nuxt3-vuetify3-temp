<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app color="drawer">
      <v-list>
        <v-list-subheader color="textondark">
          {{ appName }}
        </v-list-subheader>

        <v-list-group
          v-for="(menuItem, i) in menu"
        >
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :prepend-icon="menuItem.groupIcon"
              :title="menuItem.groupName"
              :value="menuItem.groupName"
            />
          </template>

          <v-list-item
            v-for="(item, i) in menuItem.menuItems"
            :key="i"
            :title="item.title"
            :to="item.to"
            :prepend-icon="item.icon"
            :value="item.title"
          />
        </v-list-group>
      </v-list>

    </v-navigation-drawer>


    <v-app-bar :clipped-left=clipped fixed app color="#f5f5f5"
      style="box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12) !important;">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <nuxt-link to="/" style="color:rgba(0, 0, 0, 0.87); margin-left:15px;"><v-toolbar-title v-bind:text="title" style="font-family: 'Didact Gothic'" /></nuxt-link>
      <!-- <v-toolbar-title v-bind:text="title" style="font-family: 'Didact Gothic'" /> -->
      <v-spacer />
      <p v-if="env == 'development'" style="margin:15px;">development</p>
    </v-app-bar>


    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>

    <v-footer
      :absolute="fixed"
      app
      color="#f5f5f5"
    >
      <span style="font-family: 'Didact Gothic'; margin-right:5px;" class="text-primary"> {{ appName }} </span>
      <span style="font-size:70%;">（app : {{appId}}）</span>
    </v-footer>

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
import menuObj from "@/assets/menu.json";

//--- Begin of Local variant ---
// drower
const drawer = ref(false)
const miniVariant = ref(false)
const clipped = ref(false)
const fixed = ref(false)

const env = ref(process.env.NODE_ENV)

// menu
const menu = menuObj["default"]

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
