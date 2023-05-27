<template>
  <!-- <v-container class="main">
    <h1 v-text="title"></h1>
  </v-container> -->
  <section class="login-mask">
    <div class="frame" style="padding-bottom:50px;">
      <v-row style="background:#fafafa; padding-bottom: 20px;">
        <v-col lg="6" mid="6" sm="6" cols="12" style="padding: 0px;">
          <v-row>
            <v-col cols="12">
              <!-- <img v-bind:src="loginImg" style="width:100%;"> -->
              <img src="loginPic.jpg" style="width: 100%;">
            </v-col>
            <v-col cols="12">
              <h1>{{ appName }}</h1>
              <div class="LoginInfo" v-if="loginInfo != null && loginInfo != ''" v-html="loginInfo"></div>
            </v-col>
          </v-row>
        </v-col>

        <v-col lg="6" mid="6" sm="6" cols="12">
          <div style="margin:20px; padding-top:10px;">
            <p style="text-align:center;">Please login with your Mail Address.</p>
            <ul>
              <v-text-field v-model="loginInput.mail" label="Mail" color="accent" type="text" variant="underlined" />
              <v-text-field v-model="loginInput.pw" label="Password" color="accent" type="password" variant="underlined" v-on:keyup.enter="OnMailLogin"/>
              <v-btn color="primary" style="width:100%; margin-top:15px;" v-on:click="OnMailLogin()">login</v-btn>
            </ul>
          </div>
          <div class="form-footer">
            <p>{{ appName }}<br>app:{{ appId }}</p>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>

</template>

<script setup>
import { inject, ref } from "vue";
import StoreKey from "../store/key";

definePageMeta({
    layout: "login"
  })

//--- Begin of Store Loading ---
const store = inject(StoreKey);
//--- End of Store Loading ---

// --- Begin of Hook ---
onMounted(() => store.pageTitle = "Login")
const title = computed(() => store.pageTitle)
const headTitle = computed(()=>store.headTitle)
useHead({
  title : headTitle
})
// --- End of Hook ---

const loginInfo = computed(()=>store.loginInfo)
const appName = computed(()=>store.appName)
const appId = computed(()=>store.appId)

// Begin of LoginProcess
const loginInput = reactive({
  mail : "",
  pw : ""
})
const OnMailLogin = () => {
  if(loginInput.mail == "" || loginInput.pw == "")
  {
    store.setModal({ enabled: true, title: "Error", body: "Please input Email and Password." })
    return
  }
}
// End of LoginProcess

</script>

<style scoped>
  .login-mask{
    width: 100%;
    height: 100%;
    background-color:#e9e9e9;
    font: 400 87.5%/1.5em 'Open Sans', sans-serif;
  }

  .frame{
    width:80%;
    margin:0 auto;
    max-width: 800px;
    margin-top:3em;
  }

  .LoginInfo
  {
      background-color: #eeeeee;
      border: solid 1px #dedede;
      border-radius: 5px;
      padding : 10px;
      margin : 25px 10px 10px 10px;
  }

  h1{
    text-align: center;
    font-family: 'Didact Gothic';
    font-size: 200%;
    margin-bottom: 5px;
  }

  .form-footer{
    font-family: 'Didact Gothic';
    font-size: 1em;
    padding: 1em 0;
    text-align: center;
  }

  ul{
    list-style: none;
    font-size:120%;
    margin-top:25px;
    padding: 0px 15px;
  }
</style>