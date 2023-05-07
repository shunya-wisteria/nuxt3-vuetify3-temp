<template>
  <v-container class="wrapper">
    <v-container>
      <v-row>
        <v-col cols="12" class="screen">
          {{ store.count }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" sm="3" md="3">
          <div align="center">
            <v-btn v-on:click="OnPlus()" class="cnt_btn bg-accent">+</v-btn>
          </div>
        </v-col>
        <v-col cols="12" xs="12" sm="3" md="3">
          <div align="center">
            <v-btn v-on:click="OnMinus()" class="cnt_btn bg-accent">-</v-btn>
          </div>
        </v-col>
        <v-col cols="12" xs="12" sm="6" md="6">
          <div align="center">
            <v-btn v-on:click="OnReset()" class="cnt_btn bg-error">Reset</v-btn>
          </div>

        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { inject, ref } from "vue";
import StoreKey from "../store/key";

//--- Begin of Local variant ---
const input = ref("");
//--- End of Local variant ---

//--- Begin of Store Loading ---
const store = inject(StoreKey);
//--- End of Store Loading ---


// Begin of Event Handler
const OnPlus = () => store.increment()
const OnMinus = () => store.decrement()
const OnReset = () => store.reset()
// End of Event Handler

</script>

<style scoped>
.wrapper {
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  background: linear-gradient(320deg, #eb92be, #ffef78, #63c9b4);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(35, 35, 35, 0.3);
  max-width: 800px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
}

.screen {
  backdrop-filter: blur(5.5px);
  -webkit-backdrop-filter: blur(5.5px);
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.01);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 30px rgba(35, 35, 35, 0.2);
  font-size: 30px;
  overflow: auto;
  text-align: right;
}

.cnt_btn {
  width: 100%;
}
</style>

