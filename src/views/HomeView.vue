<script setup>
import { ref, onMounted } from 'vue'
import angelo from '@/assets/img/angelo.webp';
import cornerTopLeft from '@/assets/img/hero-corner-top-left.svg';
import cornerTopRight from '@/assets/img/hero-corner-top-right.svg';
import cornerBottomLeft from '@/assets/img/hero-corner-bottom-left.svg';
import cornerBottomRight from '@/assets/img/hero-corner-bottom-right.svg';
import cornerBottom from '@/assets/img/hero-corner-bottom.svg';
import worksScroll from '@/components/worksScroll.vue';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrambleTextPlugin)

const aboutRef = ref(null)
const aboutTextRef = ref(null)
const philosophyRef = ref(null)

onMounted(() => {
  gsap.from(aboutTextRef.value, {
    x: -400,
    opacity: 0,
    duration: 2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: aboutRef.value,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  })

  const leftWords = gsap.utils.toArray('.philosophy-word-left')
  const rightWords = gsap.utils.toArray('.philosophy-word-right')

  leftWords.forEach((word, index) => {
    gsap.fromTo(word, {
      scrambleText: { text: '', chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' },
    }, {
      duration: 2.5,
      delay: index * 0.15,
      ease: 'power3.out',
      scrambleText: { text: word.textContent.trim(), chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' },
      scrollTrigger: {
        trigger: philosophyRef.value,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
  })

  rightWords.forEach((word, index) => {
    gsap.fromTo(word, {
      scrambleText: { text: '', chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' },
    }, {
      duration: 2.5,
      delay: index * 0.15,
      ease: 'power3.out',
      scrambleText: { text: word.textContent.trim(), chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789' },
      scrollTrigger: {
        trigger: philosophyRef.value,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    })
  })
})

</script>

<template>
  <main>
    <section class="hero flex items-center justify-center min-h-screen">
      
    <img :src="cornerTopLeft" alt="corner top left" class="absolute top-0 left-0 w-[30vw] md:w-[20vw] lg:w-[40vh] pointer-events-none select-none" />

    <img :src="cornerTopRight" alt="corner top right" class="absolute top-0 right-0 w-[30vw] md:w-[20vw] lg:w-[35vh] pointer-events-none select-none" />

    <img :src="cornerBottomLeft" alt="corner bottom left" class="absolute bottom-0 left-0 w-[30vw] md:w-[20vw] lg:w-[40vh] pointer-events-none select-none" />

    <img :src="cornerBottomRight" alt="corner bottom right" class="absolute bottom-0 right-0 w-[30vw] md:w-[20vw] lg:w-[40vh] pointer-events-none select-none" />
    
    <img :src="cornerBottom" alt="corner bottom" class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[25vw] max-w-full pointer-events-none select-none scale-y-[-1]" />

      <div class="relative w-fit right-5">

        <h1 class="text-[#7f9886] text-5xl md:text-8xl lg:text-9xl leading-none">
          <span class="playfair-display weight-400">Politi</span>
          <span class="roboto-bold">THOMAS</span>
        </h1>

        <h2 class="text-[#7f9886] roboto text-sm md:text-xl lg:text-3xl text-left">Graphic Design - Motion Design - 3D Art</h2>

        <img
          :src="angelo"
          alt="statua di angelo seduto sul titolo"
          class="absolute -top-16 -right-11 w-20 md:-top-24 md:-right-16 md:w-32 lg:-top-32 lg:-right-20 lg:w-40"
        />

      </div>

      <div class="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
        <p class="text-[#7f9886] roboto text-sm md:text-lg lg:text-xl">Let's create something together</p>
        <svg class="animate-bounce mx-auto mt-2 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" fill="none" stroke="#7f9886" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>

    </section>
    
    <worksScroll />

    <section ref="philosophyRef" class="relative overflow-hidden bg-[#212121] py-20 sm:py-24 lg:py-32">
      <img :src="cornerTopLeft" alt="corner top left" class="absolute top-0 left-0 w-[30vw] md:w-[20vw] lg:w-[40vh] pointer-events-none select-none" />

      <img :src="cornerTopRight" alt="corner top right" class="absolute top-0 right-0 w-[30vw] md:w-[20vw] lg:w-[35vh] pointer-events-none select-none" />

      <img :src="cornerBottomLeft" alt="corner bottom left" class="absolute bottom-0 left-0 w-[30vw] md:w-[20vw] lg:w-[40vh] pointer-events-none select-none" />

      <img :src="cornerBottomRight" alt="corner bottom right" class="absolute bottom-0 right-0 w-[30vw] md:w-[20vw] lg:w-[40vh] pointer-events-none select-none" />
    
      <img :src="cornerBottom" alt="corner bottom" class="absolute top-0 left-1/2 transform -translate-x-1/2 w-[25vw] max-w-full pointer-events-none select-none" />

      <div class="absolute inset-0]"></div>
      <div class="mx-auto relative max-w-7xl px-6 lg:px-8">
        <div class="mb-10 text-center">
          <p class="roboto-bold mb-3 text-sm uppercase tracking-[0.28em] text-[#7f9886]">Keywords della mia filosofia</p>
          <h3 class="playfair-display text-3xl sm:text-4xl lg:text-5xl text-[#7f9886]">
            Un linguaggio visivo che trasmette emozioni
          </h3>
        </div>

        <div class="grid gap-6 md:grid-cols-2 md:items-center">
          <div class="flex flex-wrap justify-center gap-3 sm:gap-4 md:justify-start">
            <span class="philosophy-word-left inline-block text-3xl font-semibold uppercase tracking-[0.16em] text-[#7f9886] sm:text-4xl md:text-5xl lg:text-6xl">Silenzioso</span>
            <span class="philosophy-word-left inline-block text-3xl font-semibold uppercase tracking-[0.16em] text-[#7f9886] sm:text-4xl md:text-5xl lg:text-6xl">Intenzionale</span>
            <span class="philosophy-word-left inline-block text-3xl font-semibold uppercase tracking-[0.16em] text-[#7f9886] sm:text-4xl md:text-5xl lg:text-6xl">Calmo</span>
          </div>

          <div class="flex flex-wrap justify-center gap-3 sm:gap-4 md:justify-end">
            <span class="philosophy-word-right inline-block text-3xl font-semibold uppercase tracking-[0.16em] text-[#7f9886] sm:text-4xl md:text-5xl lg:text-6xl">Significativo</span>
            <span class="philosophy-word-right inline-block text-3xl font-semibold uppercase tracking-[0.16em] text-[#7f9886] sm:text-4xl md:text-5xl lg:text-6xl">Emozionale</span>
            <span class="philosophy-word-right inline-block text-3xl font-semibold uppercase tracking-[0.16em] text-[#7f9886] sm:text-4xl md:text-5xl lg:text-6xl">Chiaro</span>
          </div>
        </div>

        <p class="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-[#7f9886]/80 sm:text-base lg:text-lg">
          Credo che il design dovrebbe essere intuitivo, emozionale e preciso — un bilanciamento di presenza, movimento e significato.
        </p>

        <div class="mt-12 rounded-[2rem] border border-[#7f9886]/30 bg-[#1b1b1b] px-8 py-10 shadow-[0_0_40px_rgba(127,152,134,0.08)]">
          <div class="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <p class="roboto-bold mb-3 text-sm uppercase tracking-[0.28em] text-[#7f9886]">Pronto a iniziare?</p>
              <h3 class="playfair-display text-3xl text-[#7f9886] sm:text-4xl">Hai un progetto da realizzare?</h3>
              <p class="mt-4 max-w-2xl text-sm leading-relaxed text-[#7f9886]/80 sm:text-base">
                Scrivimi e creiamo insieme un linguaggio visivo che racconti la tua idea!
              </p>
            </div>

            <router-link
              to="/contact"
              class="inline-flex items-center justify-center rounded-full border border-[#7f9886] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#7f9886] transition hover:bg-[#7f9886] hover:text-[#212121]"
            >
              Vai ai contatti
            </router-link>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>