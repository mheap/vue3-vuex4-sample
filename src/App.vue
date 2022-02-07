<script setup>
import Block from "./components/Block.vue";
import store from "./store";
</script>

<template>
  <div style="display: flex">
    <Block
      v-for="item in store.state.items"
      :key="item.id"
      :id="item.id"
      :value="item.value"
      :color="item.color"
    />
  </div>
</template>

<style></style>
