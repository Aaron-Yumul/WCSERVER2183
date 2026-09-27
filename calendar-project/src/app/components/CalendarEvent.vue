<template>
  <div class="event" :style="{ backgroundColor: color }" @click.stop>
    <!-- Read mode -->
    <div v-if="!event.edit" class="event-view">
      <span class="event-text">{{ event.details }}</span>
      <span class="event-actions">
        <i class="fa fa-pencil" @click.stop="editEvent(day.id, event.details)"></i>
        <i class="fa fa-trash-o" @click.stop="deleteEvent(day.id, event.details)"></i>
      </span>
    </div>

    <!-- Edit mode -->
    <div v-else class="event-edit">
      <input
        class="input is-small"
        type="text"
        v-model="newEventDetails"
        @keyup.enter="updateEvent(day.id, event.details, newEventDetails)"
        @keyup.esc="cancelEdit"
      />
      <span class="event-actions">
        <i class="fa fa-check" @click.stop="updateEvent(day.id, event.details, newEventDetails)"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js';

const PALETTE = [
  '#fca5a5', '#93c5fd', '#fde047', '#c4b5fd',
  '#fdba74', '#86efac', '#f9a8d4', '#67e8f9'
];

export default {
  name: 'CalendarEvent',
  props: {
    event: {
      type: Object,
      required: true
    },
    day: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      newEventDetails: this.event.details
    };
  },
  computed: {
    // Dynamic color hashing: same title always gets the same color
    color() {
      let hash = 0;
      for (let i = 0; i < this.event.details.length; i++) {
        hash = this.event.details.charCodeAt(i) + ((hash << 5) - hash);
      }
      return PALETTE[Math.abs(hash) % PALETTE.length];
    }
  },
  methods: {
    editEvent(dayId, eventDetails) {
      this.newEventDetails = eventDetails;
      store.editEvent(dayId, eventDetails);
    },
    updateEvent(dayId, originalDetails, newDetails) {
      store.updateEvent(dayId, originalDetails, newDetails.trim());
    },
    cancelEdit() {
      store.resetEditOfAllEvents();
    },
    deleteEvent(dayId, eventDetails) {
      store.deleteEvent(dayId, eventDetails);
    }
  }
};
</script>

<style scoped>
.event {
  border-radius: 4px;
  padding: 6px 8px;
  margin-bottom: 8px;
  font-size: 0.78rem;
  color: #1e293b;
  cursor: default;
}
.event-view,
.event-edit {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.event-text {
  word-break: break-word;
}
.event-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
.event-actions i {
  cursor: pointer;
  opacity: 0.7;
}
.event-actions i:hover {
  opacity: 1;
}
</style>