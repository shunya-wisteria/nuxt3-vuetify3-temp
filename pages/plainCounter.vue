<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        {{ state.counter.count }}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1">
        <v-btn v-on:click="OnPlus()">+</v-btn>
      </v-col>
      <v-col cols="1">
        <v-btn v-on:click="OnMinud()">-</v-btn>
      </v-col>
      <v-col cols="2">
        <v-btn v-on:click="OnReset()">Reset</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive } from "vue"
const state = reactive({
  counter:{
    count : 0
  }
})

const incrementCount = () => state.counter.count++
const decrementCount = () => state.counter.count--

const OnPlus = () => incrementCount()
const OnMinud = () => decrementCount()
const OnReset = () => state.counter.count = 0
</script>