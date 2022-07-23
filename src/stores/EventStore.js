import { defineStore } from "pinia";

const useEventStore = defineStore("CountStore", {
  state: () => ({
    events: [],
    event: {}
  })
});
