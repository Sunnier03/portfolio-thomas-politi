<template>
  <main class="relative overflow-hidden bg-[#212121] text-[#7f9886]">
    <section class="relative min-h-screen px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
      <img src="@/assets/img/hero-corner-top-left.svg" alt="corner top left" class="pointer-events-none absolute left-0 top-0 w-[30vw] select-none md:w-[20vw] lg:w-[40vh]" />
      <img src="@/assets/img/hero-corner-top-right.svg" alt="corner top right" class="pointer-events-none absolute right-0 top-0 w-[30vw] select-none md:w-[20vw] lg:w-[35vh]" />
      <img src="@/assets/img/hero-corner-bottom-left.svg" alt="corner bottom left" class="pointer-events-none absolute bottom-0 left-0 w-[30vw] select-none md:w-[20vw] lg:w-[40vh]" />
      <img src="@/assets/img/hero-corner-bottom-right.svg" alt="corner bottom right" class="pointer-events-none absolute bottom-0 right-0 w-[30vw] select-none md:w-[20vw] lg:w-[40vh]" />
      <img src="@/assets/img/hero-corner-bottom.svg" alt="corner bottom" class="pointer-events-none absolute bottom-0 left-1/2 w-[25vw] max-w-full -translate-x-1/2 scale-y-[-1] select-none" />

      <div class="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div class="rounded-[2rem] border border-[#7f9886]/20 bg-[#1f2921]/70 p-8 shadow-2xl backdrop-blur-sm">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div class="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-[#7f9886]/30 bg-gradient-to-br from-[#d9e7dd] via-[#7f9886] to-[#4f5e54] text-4xl font-semibold text-[#111827] shadow-lg">
                <img src="@/assets/img/pfp.webp" alt="immagine profilo" class="h-full w-full object-cover" />
              </div>
              <div>
                <p class="text-sm uppercase tracking-[0.35em] text-[#7f9886]/80">Portfolio</p>
                <h1 class="playfair-display text-3xl sm:text-4xl">Thomas Politi</h1>
                <p class="roboto mt-2 text-lg text-[#dbe3da]">Graphic Design - Motion Design - 3D Art</p>
              </div>
            </div>

            <div class="space-y-6">
              <div>
                <p class="mt-2 text-base leading-7 text-[#dbe3da]">
                  Creo progetti che uniscono identità visiva, storytelling e funzionalità con un tocco di magia.
                </p>
              </div>

              <div>
                <h2 class="roboto-bold text-sm uppercase tracking-[0.3em] text-[#7f9886]">Social</h2>
                <div class="mt-3 flex flex-wrap gap-3">
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="rounded-full border border-[#7f9886]/25 px-4 py-2 text-sm text-[#f4f7f2] transition hover:border-[#7f9886] hover:text-[#7f9886]">
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="rounded-full border border-[#7f9886]/25 px-4 py-2 text-sm text-[#f4f7f2] transition hover:border-[#7f9886] hover:text-[#7f9886]">
                    LinkedIn
                  </a>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="rounded-full border border-[#7f9886]/25 px-4 py-2 text-sm text-[#f4f7f2] transition hover:border-[#7f9886] hover:text-[#7f9886]">
                    GitHub
                  </a>
                </div>
              </div>

              <div>
                <h2 class="roboto-bold text-sm uppercase tracking-[0.3em] text-[#7f9886]">Contatti</h2>
                <ul class="mt-3 space-y-2 text-[#dbe3da]">
                  <li>tom.politi03@gmail.com</li>
                  <li>Brescia, Italia</li>
                  <li>+39 334 7343783</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-[2rem] border border-[#7f9886]/20 bg-[#1a231d]/80 p-8 shadow-2xl">
          <div class="mb-8">
            <p class="text-sm uppercase tracking-[0.35em] text-[#7f9886]/80">Contattami</p>
            <h2 class="playfair-display mt-2 text-3xl sm:text-4xl">Scrivimi un messaggio</h2>
            <p class="mt-3 text-[#cfdad1]">
              Compila il form e ti risponderò il prima possibile.
            </p>
          </div>

          <form class="space-y-5" @submit="handleSubmit">
            <div class="grid gap-5 sm:grid-cols-2">
              <label class="block">
                <span class="mb-2 block text-sm text-[#e7efe8]">Nome</span>
                <input v-model="form.firstName" type="text" required placeholder="Il tuo nome" class="w-full rounded-xl border border-[#7f9886]/20 bg-white/10 px-4 py-3 text-[#f4f7f2] placeholder:text-[#8ea08f] focus:outline-none focus:ring-2 focus:ring-[#7f9886]" />
              </label>
              <label class="block">
                <span class="mb-2 block text-sm text-[#e7efe8]">Cognome</span>
                <input v-model="form.lastName" type="text" required placeholder="Il tuo cognome" class="w-full rounded-xl border border-[#7f9886]/20 bg-white/10 px-4 py-3 text-[#f4f7f2] placeholder:text-[#8ea08f] focus:outline-none focus:ring-2 focus:ring-[#7f9886]" />
              </label>
            </div>

            <label class="block">
              <span class="mb-2 block text-sm text-[#e7efe8]">Email</span>
              <input v-model="form.email" type="email" required placeholder="tuo@email.com" class="w-full rounded-xl border border-[#7f9886]/20 bg-white/10 px-4 py-3 text-[#f4f7f2] placeholder:text-[#8ea08f] focus:outline-none focus:ring-2 focus:ring-[#7f9886]" />
            </label>

            <label class="block">
              <span class="mb-2 block text-sm text-[#e7efe8]">Oggetto</span>
              <input v-model="form.subject" type="text" required placeholder="Di cosa vuoi parlarmi?" class="w-full rounded-xl border border-[#7f9886]/20 bg-white/10 px-4 py-3 text-[#f4f7f2] placeholder:text-[#8ea08f] focus:outline-none focus:ring-2 focus:ring-[#7f9886]" />
            </label>

            <label class="block">
              <span class="mb-2 block text-sm text-[#e7efe8]">Messaggio</span>
              <textarea v-model="form.message" rows="5" required placeholder="Scrivi qui il tuo messaggio..." class="w-full rounded-xl border border-[#7f9886]/20 bg-white/10 px-4 py-3 text-[#f4f7f2] placeholder:text-[#8ea08f] focus:outline-none focus:ring-2 focus:ring-[#7f9886]" />
            </label>

            <button type="submit" class="rounded-full bg-[#7f9886] px-6 py-3 font-semibold text-[#111827] transition hover:bg-[#93a89a]">
              Invia messaggio
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from 'vue'

const contactEmail = 'tom.politi03@gmail.com'

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = (event) => {
  event.preventDefault()

  const subject = `Nuovo messaggio da ${form.firstName} ${form.lastName}`
  const body = `Nome: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\nMessaggio:\n${form.message}`

  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
</script>