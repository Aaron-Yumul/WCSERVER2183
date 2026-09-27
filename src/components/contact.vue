<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const errors = ref({})
const submitted = ref(false)

function validate() {
  const newErrors = {}

  if (!form.value.name.trim()) {
    newErrors.name = 'Name is required.'
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.value.email.trim()) {
    newErrors.email = 'Email is required.'
  } else if (!emailPattern.test(form.value.email)) {
    newErrors.email = 'Enter a valid email address.'
  }

  if (!form.value.message.trim()) {
    newErrors.message = 'Message is required.'
  }

  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

function handleSubmit() {
  submitted.value = false
  if (validate()) {
    submitted.value = true
    form.value = { name: '', email: '', message: '' }
  }
}
</script>

<template>
  <div class="contact-hero py-5 mb-4">
    <div class="container">
      <h1 class="fw-bold text-primary display-6 mb-1">Contact Us</h1>
      <p class="text-muted mb-0">Finals required: contact form with reactive input validation.</p>
    </div>
  </div>

  <div class="container pb-5">
    <div class="row g-4">
      <div class="col-md-7">
        <div class="card border-0 shadow-sm rounded-4">
          <div class="card-body p-4">
            <div v-if="submitted" class="alert alert-success">
              Thanks! Your message has been received.
            </div>

            <form @submit.prevent="handleSubmit" novalidate>
              <div class="mb-3">
                <label class="form-label fw-semibold">Full Name</label>
                <input v-model="form.name" type="text" class="form-control form-control-lg" :class="{ 'is-invalid': errors.name }" placeholder="Aaron John Yumul" />
                <div class="invalid-feedback" v-if="errors.name">{{ errors.name }}</div>
              </div>

              <div class="mb-3">
                <label class="form-label fw-semibold">Email</label>
                <input v-model="form.email" type="email" class="form-control form-control-lg" :class="{ 'is-invalid': errors.email }" placeholder="aaron.yumul@university.edu" />
                <div class="invalid-feedback" v-if="errors.email">{{ errors.email }}</div>
              </div>

              <div class="mb-3">
                <label class="form-label fw-semibold">Message</label>
                <textarea v-model="form.message" class="form-control form-control-lg" rows="4" :class="{ 'is-invalid': errors.message }" placeholder="Hello Professor! ..."></textarea>
                <div class="invalid-feedback" v-if="errors.message">{{ errors.message }}</div>
              </div>

              <button type="submit" class="btn btn-primary btn-lg px-4 submit-btn">
                <i class="bi bi-send-fill me-2"></i>Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      <div class="col-md-5">
        <div class="card border-0 shadow-sm rounded-4 helpdesk-card text-white h-100">
          <div class="card-body p-4">
            <h5 class="fw-semibold mb-3">Lab Helpdesk</h5>
            <p class="opacity-90 small mb-4">Need assistance with your FIN-LAB-1 activity? Reach out to your instructor.</p>
            <div class="d-flex align-items-center gap-3 mb-3">
              <i class="bi bi-geo-alt-fill fs-5"></i>
              <div><strong>Location</strong><br /><span class="small opacity-90">Computer Lab 4</span></div>
            </div>
            <div class="d-flex align-items-center gap-3 mb-3">
              <i class="bi bi-envelope-fill fs-5"></i>
              <div><strong>Email</strong><br /><span class="small opacity-90">weblab@university.edu</span></div>
            </div>
            <div class="d-flex align-items-center gap-3">
              <i class="bi bi-clock-fill fs-5"></i>
              <div><strong>Hours</strong><br /><span class="small opacity-90">9:00 AM – 5:00 PM</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-hero {
  background: linear-gradient(180deg, #eef6ff 0%, #ffffff 100%);
}

.helpdesk-card {
  background: linear-gradient(135deg, #0d6efd 0%, #0dcaf0 100%);
}

.submit-btn {
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.5rem 1rem rgba(13, 110, 253, 0.25);
}
</style>
