<template>
  <div class="page">
    <h1 class="app-title">UpVote!</h1>
    <div class="title-underline"></div>
    <p class="app-subtitle">Instantaneous reactive sorting powered by Vue 3 computed properties</p>

    <div class="submissions-list">
      <SubmissionCard
        v-for="(submission, index) in sortedSubmissions"
        :key="submission.id"
        :submission="submission"
        :submissions="sortedSubmissions"
        :rank="index + 1"
      />
    </div>
  </div>
</template>

<script lang="ts">
import SubmissionCard from './components/SubmissionCard.vue'
import { submissions } from './seed'

export default {
  name: 'App',
  components: { SubmissionCard },
  data() {
    return { submissions }
  },
  computed: {
    sortedSubmissions() {
      return this.submissions.slice().sort((a, b) => b.votes - a.votes)
    },
  },
}
</script>