<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { progetti } from '@/data/progetti.js'

gsap.registerPlugin(ScrollTrigger)

const sezioneRef = ref(null)
const sliderSopraRef = ref(null)
const sliderSottoRef = ref(null)

const posizioni = [
  '-translate-y-28',
  'translate-y-32',
  '-translate-y-16',
  'translate-y-20',
  '-translate-y-36',
  'translate-y-28',
]

onMounted(() => {
  const sotto = sliderSottoRef.value
  const sopra = sliderSopraRef.value
  const sezione = sezioneRef.value
  const totalScroll = sotto.scrollWidth - window.innerWidth

  gsap.timeline({
    scrollTrigger: {
      trigger: sezione,
      pin: true,
      scrub: 1.5,
      end: `+=${totalScroll}`,
    }
  }).to([sotto, sopra], {
    x: -totalScroll,
    ease: 'none',
  })
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<template>
  <section ref="sezioneRef" class="relative isolate h-screen overflow-hidden flex items-center">

    <div ref="sliderSottoRef" class="absolute inset-0 flex items-center w-max px-[15vw] gap-16 z-0">
      <div
        v-for="(progetto, index) in progetti"
        :key="`sotto-${progetto.id}`"
        class="flex-shrink-0 w-[40vw] md:w-[30vw] lg:w-[22vw]"
        :class="[
          posizioni[index % posizioni.length],
          index % 2 === 0 ? 'pointer-events-none' : ''
        ]"
      >
        <RouterLink
          v-if="index % 2 !== 0"
          :to="`/works/${progetto.id}`"
          class="group block"
        >
          <div class="relative overflow-hidden aspect-[1/1] rounded-full transition-transform duration-500 group-hover:scale-105">
            <img :src="progetto.copertina" :alt="progetto.titolo"
                 class="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </RouterLink>

        <div v-else class="aspect-[1/1] w-full opacity-0 pointer-events-none" />
      </div>
    </div>

    <div class="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
      <h2 class="text-[22vw] playfair-display text-[#7f9886] select-none whitespace-nowrap leading-none">
        WORKS
      </h2>
    </div>

    <div ref="sliderSopraRef" class="absolute flex items-center w-max px-[15vw] gap-16 z-20">
      <div
        v-for="(progetto, index) in progetti"
        :key="`sopra-${progetto.id}`"
        class="flex-shrink-0 w-[40vw] md:w-[30vw] lg:w-[22vw]"
        :class="[
          posizioni[index % posizioni.length],
          index % 2 !== 0 ? 'pointer-events-none' : ''
        ]"
      >
        <RouterLink
          v-if="index % 2 === 0"
          :to="`/works/${progetto.id}`"
          class="group block"
        >
          <div class="relative overflow-hidden aspect-[1/1] rounded-full bg-stone-900 transition-transform duration-500 group-hover:scale-105">
            <img :src="progetto.copertina" :alt="progetto.titolo"
                 class="w-full h-full object-cover opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </RouterLink>

        <div v-else class="aspect-[1/1] w-full opacity-0 pointer-events-none" />
      </div>
    </div>

  </section>
</template>