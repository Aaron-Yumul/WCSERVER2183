<template>
  <div
    class="day column"
    :class="{ 'is-active': day.active }"
    @click="setActiveDay(day.id)"
  >
    <div class="day-banner">{{ day.abbvTitle }}</div>

    <div class="day-details">
      <div class="day-number">Day {{ day.id }}</div>

      <p v-if="day.events.length === 0" class="no-events">No events</p>

      <CalendarEvent
        v-for="event in day.events"
        :key="event.details"
        :event="event"
        :day="day"
      />
    </div>
  </div>
</template>

<script>
import { store } from '../store.js';
import CalendarEvent from './CalendarEvent.vue';

export default {
  name: 'CalendarDay',
  components: {
    CalendarEvent
  },
  props: {
    day: {
      type: Object,
      required: true
    }
  },
  methods: {
    setActiveDay(dayId) {
      store.setActiveDay(dayId);
    }
  }
};
</script>

<style scoped>
.day {
  cursor: pointer;
  min-height: 260px;
  padding: 0;
  border-right: 1px solid #e2e8f0;
  transition: background 0.15s ease;
}
.day:last-child {
  border-right: none;
}
.day:hover {
  background: #f8fafc;
}
.day.is-active {
  background: #eff6ff;
  box-shadow: inset 0 0 0 2px #3b82f6;
}
.day-banner {
  background: #1e293b;
  color: #ffffff;
  text-align: center;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 8px 0;
  margin: 8px;
  border-radius: 4px;
}
.day.is-active .day-banner {
  background: #3b82f6;
}
.day-details {
  padding: 0 8px 8px;
}
.day-number {
  text-align: right;
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 6px;
}
.no-events {
  text-align: center;
  font-size: 0.7rem;
  font-style: italic;
  color: #94a3b8;
  margin-top: 24px;
}
</style>