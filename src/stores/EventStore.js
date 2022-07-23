import { defineStore } from "pinia";
import EventService from "../services/EventService.js";

export const useEventStore = defineStore("CountStore", {
  state: () => ({
    events: [],
    event: {}
  }),
  getters: {
    numberOfEvents: (state) => state.events.length
  },
  actions: {
    fetchEvents() {
      return EventService.getEvents()
        .then((response) => {
          this.events = response.data;
        })
        .catch((error) => {
          throw error;
        });
    }
  }
});
