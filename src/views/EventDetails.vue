<script setup>
import { storeToRefs } from "pinia";
import { useEventStore } from "../stores/EventStore";
const props = defineProps({
  id: String
});

const eventStore = useEventStore();
const { event } = storeToRefs(eventStore);
eventStore.fetchEvent(props.id);
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>
      {{ event.time }} on {{ event.date }} @
      {{ event.location }}
    </p>
    <p>{{ event.description }}</p>
  </div>
</template>
