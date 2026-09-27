<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top app-navbar">
    <div class="container">
      <router-link class="navbar-brand fw-bold fs-4 brand-gradient" to="/">VueJS</router-link>
      <div class="navbar-nav ms-auto">
        <router-link class="nav-link px-3" active-class="active" to="/">Home</router-link>
        <router-link class="nav-link px-3" active-class="active" to="/blog">Blog</router-link>
        <router-link class="nav-link px-3" active-class="active" to="/gallery">Gallery</router-link>
        <router-link class="nav-link px-3" active-class="active" to="/about">About</router-link>
        <router-link class="nav-link px-3" active-class="active" to="/contact">Contact</router-link>
      </div>
    </div>
  </nav>

  <router-view />

  <footer class="text-center text-muted small py-4 mt-5 border-top bg-light">
    FIN-LAB-1: VueJS Routing and Navigation Activity &copy; 2026
  </footer>
</template>

<style scoped>
.app-navbar {
  background: linear-gradient(90deg, #0d6efd 0%, #0dcaf0 100%);
  backdrop-filter: blur(6px);
}

.brand-gradient {
  letter-spacing: 0.5px;
}

.nav-link {
  position: relative;
  transition: opacity 0.15s ease;
}
.nav-link::after {
  content: '';
  position: absolute;
  left: 0.75rem;
  right: 0.75rem;
  bottom: 2px;
  height: 2px;
  background: #fff;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}
.nav-link:hover::after,
.nav-link.active::after {
  transform: scaleX(1);
}
.nav-link:hover {
  opacity: 0.9;
}
</style>
