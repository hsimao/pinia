import { defineStore } from "pinia";

export const useEventStore = defineStore("CountStore", {
  state: () => ({
    events: [],
    event: {}
  }),
  getters: {
    numberOfEvents: (state) => state.events.length
  }
});
