<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { provide } from "vue";
import Store from "./store/index";
import StoreKey from "./store/key";

provide(StoreKey, Store());
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Open+Sans);
  @import url(https://fonts.googleapis.com/earlyaccess/notosansjapanese.css);
  @import url(https://fonts.googleapis.com/css?family=Carme);
  @import url(https://fonts.googleapis.com/css?family=Didact+Gothic);

  body{
    font-family: 'Open Sans','Rounded Mplus 1c', Segoe UI, "メイリオ", Meiryo, sans-serif;
    color:#737373;
  }

  h1{
    font-family: 'Didact Gothic';
    font-size:150%;
    font-weight: 200;
    margin: 5px 0px 20px 0px;
  }
  h2{
    font-family: 'Didact Gothic';
    font-weight: 300;
    font-size:120%;
    margin: 10px 0px;
  }
  h3{
    font-family: 'Didact Gothic';
    font-weight: 300;
    margin: 10px 0px;
  }
  h4{
    font-family: 'Didact Gothic';
    font-size: 110%;
    font-weight: 300;
    margin: 10px 0px 0px 0px;
  }
  .v-application a{
    text-decoration: none;
    transition-property: all;
    transition: 0.2s linear;
  }
  .v-application a:hover{
    color: #dcdcdc;
    text-decoration: none;
  }

  .main{
    width:95%;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 30px;
    display: block;
    font-size:100%;
    line-height: 180%;
  }

  section{
    margin:0px 0px 40px 0px;
  }

</style>
