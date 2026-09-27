<template>
  <div class="card" :class="{ 'blue-border': submission.votes >= 20 }">
    <img class="thumb" :src="submission.submissionImage" :alt="submission.title" />

    <div class="card-body">
      <div class="title-row">
        <a :href="submission.url" class="title-link" target="_blank" rel="noopener">{{ submission.title }}</a>
        <span class="id-badge">#{{ submission.id }}</span>
      </div>

      <span v-if="rank === 1" class="rank-badge">🏆 #1 Rank</span>

      <p class="description">{{ submission.description }}</p>

      <div class="submitted-by">
        Submitted by:
        <img class="avatar" :src="submission.avatar" :alt="submission.title" />
      </div>
    </div>

    <button class="upvote-btn" @click="upvote(submission.id)">
      <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
      <span class="vote-count">{{ submission.votes }}</span>
    </button>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import type { Submission } from '../seed'

export default {
  name: 'SubmissionCard',
  props: {
    submission: { type: Object as PropType<Submission>, required: true },
    submissions: { type: Array as PropType<Submission[]>, required: true },
    rank: { type: Number, required: true },
  },
  methods: {
    upvote(submissionId: number) {
      const submission = this.submissions.find((sub) => sub.id === submissionId)
      if (submission) {
        submission.votes++
      }
    },
  },
}
</script>