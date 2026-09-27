<script setup>
const competencies = [
  'Client-side SPA route registration in router/index.js',
  'Declarative navigation with <router-link>',
  'Bootswatch Cerulean theme integration via CDN',
  'Cloud production build and SPA rewrite configuration',
]
</script>

<template>
  <div class="container py-5">
    <div class="about-hero text-white rounded-4 p-5 mb-4">
      <h1 class="fw-bold display-6 hero-title">About This Project</h1>
      <p class="lead mb-0 opacity-90">FIN-LAB-1: Comprehensive Routing and Navigation Activity in Vue.js</p>
    </div>

    <div class="row g-4">
      <div class="col-md-6">
        <div class="card h-100 border-0 shadow-sm rounded-4">
          <div class="card-body p-4">
            <h5 class="fw-semibold mb-3"><i class="bi bi-person-circle text-primary me-2"></i>Student Information</h5>
            <table class="table table-borderless mb-0">
              <tbody>
                <tr>
                  <td class="text-muted">Activity Code:</td>
                  <td class="text-end fw-semibold">FIN-LAB-3</td>
                </tr>
                <tr>
                  <td class="text-muted">Topic:</td>
                  <td class="text-end fw-semibold">Vue Router &amp; Navigation</td>
                </tr>
                <tr>
                  <td class="text-muted">Components Created:</td>
                  <td class="text-end fw-semibold text-success">5 / 5 Complete</td>
                </tr>
                <tr>
                  <td class="text-muted">Status:</td>
                  <td class="text-end">
                    <span class="badge bg-success-subtle text-success rounded-pill">Finals Ready</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100 border-0 shadow-sm rounded-4">
          <div class="card-body p-4">
            <h5 class="fw-semibold mb-3"><i class="bi bi-rocket-takeoff text-primary me-2"></i>Technical Competencies</h5>
            <ul class="timeline list-unstyled mb-0">
              <li v-for="item in competencies" :key="item">
                <span class="timeline-dot"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-hero {
  background: linear-gradient(135deg, #0d6efd 0%, #6610f2 100%);
}
.hero-title {
  color: #ffffff !important;
}

.timeline {
  position: relative;
  padding-left: 0.5rem;
}
.timeline li {
  position: relative;
  padding-left: 1.75rem;
  padding-bottom: 1.1rem;
  margin-left: 0.35rem;
}
.timeline li:not(:last-child)::before {
  content: '';
  position: absolute;
  left: 0.3rem;
  top: 1rem;
  bottom: -0.5rem;
  width: 2px;
  background: #dee2e6;
}
.timeline-dot {
  position: absolute;
  left: 0;
  top: 0.2rem;
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
  background: #198754;
  box-shadow: 0 0 0 3px rgba(25, 135, 84, 0.15);
}
</style>
