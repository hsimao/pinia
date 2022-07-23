import { defineStore } from "pinia";

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    user: "Mars CHEN"
  }),
  getters: {
    firstName() {
      return this.user.split(" ")[0];
    }
  }
});
