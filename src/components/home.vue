<script setup>
const features = [
  { icon: 'bi-signpost-2', title: 'Vue Router Ready', text: 'Client-side routing with clean, hash-free URLs powered by history mode.' },
  { icon: 'bi-palette', title: 'Bootswatch Cerulean', text: 'A polished, cohesive theme loaded globally via CDN across every view.' },
  { icon: 'bi-cloud-arrow-up', title: 'Production Build', text: 'Compiled with Vite and ready for deployment to a live cloud server.' },
]

const stats = [
  { value: '5', label: 'Components' },
  { value: '100%', label: 'Client-side Routing' },
  { value: '0', label: 'Page Reloads' },
]
</script>

<template>
  <div class="hero-section text-white py-5 mb-5">
    <div class="container py-4">
      <span class="badge bg-white text-primary rounded-pill mb-3 px-3 py-2">FIN-LAB-1 · Vue Router 4</span>
      <h1 class="display-4 fw-bold mb-3 hero-title">Home</h1>
      <p class="lead mb-4 opacity-90">Welcome to your Vue.js App — routed, styled, and production-ready.</p>

      <div class="d-flex flex-wrap gap-4 mt-4">
        <div v-for="stat in stats" :key="stat.label">
          <div class="fs-2 fw-bold">{{ stat.value }}</div>
          <div class="small opacity-75">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="alert alert-info d-flex align-items-center gap-3 mb-5 shadow-sm border-0">
      <i class="bi bi-mortarboard-fill fs-3 text-primary"></i>
      <div>
        <strong>FIN-LAB-1 Activity Active!</strong><br />
        This view is rendered from <code>src/components/home.vue</code> via the default path <code>/</code>.
      </div>
    </div>

    <div class="row g-4 mb-5">
      <div class="col-md-4" v-for="feature in features" :key="feature.title">
        <div class="card h-100 border-0 shadow-sm feature-card">
          <div class="card-body text-center py-5">
            <div class="feature-icon mb-3">
              <i :class="['bi', feature.icon]"></i>
            </div>
            <h5 class="card-title fw-semibold">{{ feature.title }}</h5>
            <p class="card-text text-muted">{{ feature.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="d-flex gap-3 mb-5">
      <router-link to="/blog" class="btn btn-primary btn-lg px-4">Proceed to Blog &rarr;</router-link>
      <router-link to="/gallery" class="btn btn-outline-primary btn-lg px-4">View Gallery</router-link>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%);
  position: relative;
  overflow: hidden;
}
.hero-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15), transparent 55%);
}
.hero-title {
  color: #ffffff !important;
}

.feature-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border-radius: 1rem;
}
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 1rem 2rem rgba(13, 110, 253, 0.15) !important;
}
.feature-icon {
  font-size: 2.5rem;
  color: #0d6efd;
  transition: transform 0.25s ease;
}
.feature-card:hover .feature-icon {
  transform: scale(1.15) rotate(-4deg);
}
</style>
