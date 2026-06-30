<script setup>
import { progetti } from '@/data/progetti.js'
</script>

<template>
  <main class="relative min-h-screen overflow-hidden px-12 py-32">
      <img src="@/assets/img/hero-corner-top-left.svg" alt="corner top left" class="pointer-events-none absolute left-0 top-0 w-[30vw] select-none md:w-[20vw] lg:w-[40vh] z-10" />
      <img src="@/assets/img/hero-corner-top-right.svg" alt="corner top right" class="pointer-events-none absolute right-0 top-0 w-[30vw] select-none md:w-[20vw] lg:w-[35vh] z-10" />
      <img src="@/assets/img/hero-corner-bottom-left.svg" alt="corner bottom left" class="pointer-events-none absolute bottom-0 left-0 w-[30vw] select-none md:w-[20vw] lg:w-[40vh] z-10" />
      <img src="@/assets/img/hero-corner-bottom-right.svg" alt="corner bottom right" class="pointer-events-none absolute bottom-0 right-0 w-[30vw] select-none md:w-[20vw] lg:w-[40vh] z-10" />
      <img src="@/assets/img/hero-corner-bottom.svg" alt="corner bottom" class="pointer-events-none absolute bottom-0 left-1/2 w-[25vw] max-w-full -translate-x-1/2 scale-y-[-1] select-none z-10" />
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

      <RouterLink
        v-for="progetto in progetti"
        :key="progetto.id"
        :to="`/works/${progetto.id}`"
        class="group cursor-pointer hover:scale-105 transition-transform duration-300 z-0"
      >
      
        <img :src="progetto.copertina" :alt="progetto.titolo"
             class="w-full aspect-square object-cover" />
        <h2 class="playfair-display text-[#7f9886] mt-4 text-2xl lg:text-3xl font-bold text-center">{{ progetto.titolo }}</h2>
        <p class="text-stone-400 mt-1 lg:text-lg text-center">{{ progetto.sottotitolo }}</p>
      </RouterLink>

    </div>
  </main>
</template>