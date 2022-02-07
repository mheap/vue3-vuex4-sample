<script>
import store from "../store";
export default {
  props: ["id", "value", "color"],
  computed: {
    cssProps() {
      return {
        "--color": this.color,
      };
    },
  },
  methods: {
    setColor(color) {
      store.commit("setColor", { id: this.id, color });
      return false;
    },
  },
};
</script>

<template>
  <div class="wrapper" :style="cssProps">
    <span>{{ value }}</span>

    <div style="margin-top: 20px">
      <button @click="setColor('red')">Red</button>
      <button @click="setColor('yellow')">Yellow</button>
      <button @click="setColor('skyblue')">Blue</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background: var(--color);
  width: 200px;
  height: 200px;
  padding: 12px;
}
</style>
