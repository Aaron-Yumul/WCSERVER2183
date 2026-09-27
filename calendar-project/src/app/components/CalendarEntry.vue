<template>
  <div class="card entry-card">
    <div class="card-content">
      <h2 class="title is-5">New Event</h2>
      <p class="subtitle is-6">
        Day of event:
        <strong class="has-text-link">{{ activeDayTitle }}</strong>
      </p>

      <div class="field">
        <div class="control">
          <input
            class="input"
            :class="{ 'is-danger': error }"
            type="text"
            placeholder="e.g. Code Review with Team"
            v-model="inputEntry"
            @input="error = false"
            @keyup.enter="submitEvent(inputEntry)"
          />
        </div>
        <p v-if="error" class="help is-danger">
          Please enter an event description.
        </p>
      </div>

      <button class="button is-link is-fullwidth" @click="submitEvent(inputEntry)">
        <span class="icon"><i class="fa fa-plus"></i></span>
        <span>Submit to {{ activeDayAbbv }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js';

export default {
  name: 'CalendarEntry',
  data() {
    return {
      sharedState: store.state,
      inputEntry: '',
      error: false
    };
  },
  computed: {
    activeDay() {
      return this.sharedState.data.find(day => day.active);
    },
    activeDayTitle() {
      return this.activeDay ? this.activeDay.fullTitle : 'None selected';
    },
    activeDayAbbv() {
      return this.activeDay ? this.activeDay.abbvTitle : '—';
    }
  },
  methods: {
    submitEvent(eventDetails) {
      if (!eventDetails.trim()) {
        this.error = true;
        return;
      }
      store.submitEvent(eventDetails.trim());
      this.inputEntry = '';
      this.error = false;
    }
  }
};
</script>

<style scoped>
.entry-card {
  max-width: 420px;
  margin: 0 auto;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}
</style>