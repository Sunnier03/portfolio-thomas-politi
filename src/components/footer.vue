<template>
  <footer class="bg-[#7f9886] text-[#212121]">
    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
      <div class="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
        <div class="space-y-4">
          <h2 class="playfair-display text-3xl sm:text-4xl">Thomas Politi</h2>
          <p class="roboto text-sm sm:text-base leading-relaxed text-[#212121]/80">
            Graphic Design <br> Motion Design <br> 3D Art
          </p>
        </div>

        <div>
          <h3 class="roboto-bold mb-4 text-sm font-semibold uppercase tracking-[0.24em]">Links</h3>
          <ul class="space-y-3 text-sm sm:text-base">
            <li>
              <router-link to="/" class="transition hover:opacity-50">Home</router-link>
            </li>
            <li>
              <router-link to="/works" class="transition hover:opacity-50">Works</router-link>
            </li>
            <li>
              <router-link to="/contact" class="transition hover:opacity-50">Contact</router-link>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="roboto-bold mb-4 text-sm font-semibold uppercase tracking-[0.24em]">Social</h3>
          <div class="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/tommysny03/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 rounded-full border border-[#212121]/30 px-3 py-2 text-sm transition hover:bg-[#212121] hover:text-[#7f9886]"
            >
              <span>Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/thomaspoliti/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 rounded-full border border-[#212121]/30 px-3 py-2 text-sm transition hover:bg-[#212121] hover:text-[#7f9886]"
            >
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Sunnier03"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 rounded-full border border-[#212121]/30 px-3 py-2 text-sm transition hover:bg-[#212121] hover:text-[#7f9886]"
            >
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div>
          <h3 class="roboto-bold mb-4 text-sm font-semibold uppercase tracking-[0.24em]">Contatti</h3>
          <p class="roboto text-sm sm:text-base leading-relaxed text-[#212121]/80">
            Hai in mente un progetto? Parliamo insieme!
          </p>
          <a href="mailto:tom.politi03@gmail.com" class="mt-4 inline-flex text-sm font-semibold transition hover:opacity-50">
            tom.politi03@gmail.com
          </a>
          <p class="mt-3 text-sm sm:text-base">+39 334 734 3783</p>
        </div>
      </div>

      <div class="mt-12 flex flex-col gap-3 border-t border-[#212121]/20 pt-6 md:flex-row md:items-center md:justify-between">
        <p class="text-sm">&copy; 2026 Thomas Politi. All rights reserved.</p>
        <div class="flex flex-wrap items-center gap-3 text-sm">
          <a href="#" class="transition hover:opacity-50">Privacy</a>
          <span class="h-1 w-1 rounded-full bg-[#212121]/60"></span>
          <a href="#" class="transition hover:opacity-50">Legal</a>
        </div>
      </div>
    </div>
  </footer>
</template>