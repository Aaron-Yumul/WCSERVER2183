<script setup>
import { ref, computed } from 'vue'

const categories = ['All', 'Web Apps', 'UI / UX', 'DevOps']
const activeCategory = ref('All')

const items = ref([
  { id: 1, icon: 'bi-signpost-2', tag: 'WEB APP', accent: '#0d6efd', category: 'Web Apps', name: 'Vue Router SPA Architecture', text: 'Single-page navigation using declarative <router-link> and nested routes.' },
  { id: 2, icon: 'bi-palette', tag: 'UI / UX', accent: '#dc3545', category: 'UI / UX', name: 'Bootswatch Dashboard Theme', text: 'Cerulean-styled design system featuring a responsive navbar and cards.' },
  { id: 3, icon: 'bi-cloud-arrow-up', tag: 'DEVOPS', accent: '#6c757d', category: 'DevOps', name: 'Cloud Server CI/CD Pipeline', text: 'Automated build and deployment workflow to Vercel and Netlify.' },
  { id: 4, icon: 'bi-lightning-charge', tag: 'WEB APP', accent: '#0d6efd', category: 'Web Apps', name: 'Vite Production Build', text: 'Lightning-fast bundling and hot module replacement during development.' },
  { id: 5, icon: 'bi-phone', tag: 'UI / UX', accent: '#dc3545', category: 'UI / UX', name: 'Responsive Grid Layouts', text: 'Adaptive card grids that reflow cleanly across breakpoints.' },
  { id: 6, icon: 'bi-plug', tag: 'DEVOPS', accent: '#6c757d', category: 'DevOps', name: 'Apache Rewrite Configuration', text: '.htaccess rules enabling clean SPA history-mode routing in production.' },
])

const filteredItems = computed(() => {
  if (activeCategory.value === 'All') return items.value
  return items.value.filter((item) => item.category === activeCategory.value)
})
</script>

<template>
  <div class="container py-5">
    <div class="d-flex flex-wrap justify-content-between align-items-end mb-4">
      <div>
        <h1 class="fw-bold text-primary mb-1">Project Gallery</h1>
        <p class="text-muted mb-0">Project showcase portfolio with interactive category filters.</p>
      </div>

      <div class="btn-group mt-3 mt-md-0" role="group">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="btn btn-sm"
          :class="activeCategory === cat ? 'btn-primary' : 'btn-outline-primary'"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <div class="row g-4">
      <div class="col-md-4" v-for="item in filteredItems" :key="item.id">
        <div class="card h-100 border-0 shadow-sm gallery-card" :style="{ '--accent': item.accent }">
          <div class="gallery-icon d-flex align-items-center justify-content-center">
            <i :class="['bi', item.icon]" :style="{ color: item.accent }"></i>
          </div>
          <div class="card-body">
            <span class="badge rounded-pill mb-2" :style="{ backgroundColor: item.accent + '22', color: item.accent }">{{ item.tag }}</span>
            <h5 class="card-title fw-semibold">{{ item.name }}</h5>
            <p class="card-text text-muted small">{{ item.text }}</p>
            <a href="#" class="small fw-semibold text-decoration-none view-link" @click.prevent>View Details &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-card {
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.gallery-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 1.25rem 2rem rgba(0,0,0,0.12) !important;
}

.gallery-icon {
  height: 150px;
  font-size: 2.75rem;
  background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 15%, white), color-mix(in srgb, var(--accent) 30%, white));
  transition: transform 0.3s ease;
}
.gallery-card:hover .gallery-icon {
  transform: scale(1.05);
}

.view-link {
  color: var(--accent);
  transition: letter-spacing 0.2s ease;
}
.view-link:hover {
  letter-spacing: 0.5px;
}
</style>
