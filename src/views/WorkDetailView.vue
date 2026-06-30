<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { progetti } from '@/data/progetti.js'

const route = useRoute()
const progetto = progetti.find(p => p.id === route.params.id)

const videoSrc = computed(() => {
  if (!progetto?.video) return ''

  const url = String(progetto.video).trim()

  if (url.includes('youtube.com/watch?v=')) {
    const videoId = url.split('v=')[1]?.split('&')[0]
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url
  }

  if (url.includes('youtube.com/shorts/')) {
    const videoId = url.split('shorts/')[1]?.split('?')[0]
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url
  }

  if (url.includes('youtu.be/')) {
    const videoId = url.split('youtu.be/')[1]?.split('?')[0]
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url
  }

  return url
})

const isShort = computed(() => {
  if (!progetto?.video) return false
  const url = String(progetto.video).trim()
  return url.includes('youtube.com/shorts/') || url.includes('/shorts/')
})
</script>

<template>
  <main class="relative min-h-screen overflow-hidden px-12 py-32">
    <img src="@/assets/img/hero-corner-top-left.svg" alt="corner top left" class="pointer-events-none absolute left-0 top-0 w-[30vw] select-none md:w-[20vw] lg:w-[40vh]" />
    <img src="@/assets/img/hero-corner-top-right.svg" alt="corner top right" class="pointer-events-none absolute right-0 top-0 w-[30vw] select-none md:w-[20vw] lg:w-[35vh]" />
    <img src="@/assets/img/hero-corner-bottom-left.svg" alt="corner bottom left" class="pointer-events-none absolute bottom-0 left-0 w-[30vw] select-none md:w-[20vw] lg:w-[40vh]" />
    <img src="@/assets/img/hero-corner-bottom-right.svg" alt="corner bottom right" class="pointer-events-none absolute bottom-0 right-0 w-[30vw] select-none md:w-[20vw] lg:w-[40vh]" />
    <img src="@/assets/img/hero-corner-bottom.svg" alt="corner bottom" class="pointer-events-none absolute bottom-0 left-1/2 w-[25vw] max-w-full -translate-x-1/2 scale-y-[-1] select-none" />

    <div class="mx-auto max-w-4xl">
    <!-- Se il progetto non esiste -->
    <div v-if="!progetto">
      <p>Progetto non trovato.</p>
    </div>

    <!-- Se il progetto esiste -->
    <div v-else>
      <p class="text-[#7f9886]/80">{{ progetto.anno }} — {{ progetto.sottotitolo }}</p>
      <h1 class="playfair-display text-[#7f9886] text-6xl mt-2">{{ progetto.titolo }}</h1>
      <p class="mt-8 text-lg text-stone-300">{{ progetto.descrizione }}</p>

      <div v-if="videoSrc" class="mt-16 flex justify-center">
        <iframe
          :src="videoSrc"
          :title="`${progetto.titolo} video`"
          :class="isShort ? 'aspect-[9/16] w-full max-w-[420px]' : 'aspect-video w-full'"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div v-else class="mt-16 flex flex-col gap-8">
        <img
          v-for="(img, index) in progetto.immagini"
          :key="index"
          :src="img"
          :alt="`${progetto.titolo} - immagine ${index + 1}`"
          class="w-full"
        />
      </div>
    </div>
    </div>

  </main>
</template>