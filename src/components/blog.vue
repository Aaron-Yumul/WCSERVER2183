<script setup>
import { ref } from 'vue'

const title = ref('My Development Blog')

const posts = ref([
  { id: 1, tag: 'Vue Router', accent: '#0d6efd', date: 'Sep 24, 2026', heading: 'Understanding Single Page Application Routing', summary: 'How client-side routers intercept URL changes using the HTML5 History API without triggering server reloads.' },
  { id: 2, tag: 'Architecture', accent: '#198754', date: 'Sep 20, 2026', heading: 'Component Composition & Scoped CSS', summary: 'Encapsulating presentation, reactive logic, and scoped styles within single-file .vue components.' },
  { id: 3, tag: 'Deployment', accent: '#fd7e14', date: 'Sep 15, 2026', heading: 'Configuring SPA Fallbacks for Production', summary: 'Solving the notorious 404-on-refresh error by directing all route requests to index.html via .htaccess or vercel.json.' },
])
</script>

<template>
  <div class="blog-hero py-5 mb-5">
    <div class="container">
      <h1 class="fw-bold text-primary display-6">{{ title }}</h1>
      <p class="text-muted mb-0">Reactive data binding with <code v-pre>{{ title }}</code> inside <code>blog.vue</code>.</p>
    </div>
  </div>

  <div class="container mb-5">
    <div
      class="card mb-3 border-0 shadow-sm post-card"
      v-for="post in posts"
      :key="post.id"
      :style="{ '--accent': post.accent }"
    >
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-start mb-2">
          <span class="badge rounded-pill" :style="{ backgroundColor: post.accent + '22', color: post.accent }">{{ post.tag }}</span>
          <small class="text-muted">{{ post.date }}</small>
        </div>
        <h5 class="card-title fw-semibold">{{ post.heading }}</h5>
        <p class="card-text text-muted mb-0">{{ post.summary }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-hero {
  background: linear-gradient(180deg, #eef6ff 0%, #ffffff 100%);
}

.post-card {
  border-radius: 0.85rem;
  border-left: 4px solid var(--accent) !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.post-card:hover {
  transform: translateX(6px);
  box-shadow: 0 0.75rem 1.5rem rgba(0,0,0,0.08) !important;
}
</style>
