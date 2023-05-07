<template>
  <v-container class="wrapper">
    <v-container>
      <v-row>
        <v-col cols="12" xs="12" sm="4" md="4">ユーザー名</v-col>
        <v-col cols="12" xs="12" sm="8" md="8" class="screen">{{ store.user.name }}</v-col>
      </v-row>
      <v-row>
        <v-col cols="12" xs="12" sm="4" md="4"><v-text-field v-model="input" bg-color="white"
            v-on:keyup.enter="OnChangeNm()"></v-text-field></v-col>
        <v-col cols="12" xs="12" sm="4" md="4"><v-btn v-on:click="OnChangeNm()">変更</v-btn></v-col>
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
const OnChangeNm = () => {
  if (input.value == "") {
    store.setModal({ enabled: true, title: "Error", body: "Please input user name field." })
    return
  }
  if (store.updateUserName(input.value)) {
    store.setModal({ enabled: true, title: "Info", body: "Update was completed." })
  }
}
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
  font-size: 20px;
  overflow: auto;
  text-align: left;
}

.inputField {
  /* background: rgba(255,255,255,0.75); */
  padding: 0px;
  margin: 0px;
}
</style>

