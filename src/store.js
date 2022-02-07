import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      items: [
        { id: 1, value: "One", color: "red" },
        { id: 2, value: "Two", color: "yellow" },
        { id: 3, value: "Three", color: "skyblue" },
      ],
    };
  },
  mutations: {
    setColor(state, { id, color }) {
      console.log(`Setting block ${id} to ${color}`);
      const item = state.items.find((i) => i.id == id);
      if (item) {
        Object.assign(item, { ...item, color });
      }
    },
  },
});

export default store;
