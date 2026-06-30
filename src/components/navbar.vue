<template>
  <nav class="fixed top-12 md:top-8 left-0 right-0 z-50 flex justify-center gap-12">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/works">Works</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>
</template>

<script setup>
</script>

<style scoped>
a {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #7f9886;
    transition: color 300ms ease;
}

a:hover {
  color: #adccb6;
}

a.router-link-active {
  color: #adccb6;
  font-weight: 700;
}
</style>