<script setup lang="ts"></script>

<template>
  <header class="pt-10 pb-8 sm:pb-10 sm:pt-[3.625rem] px-10 text-center">
    <h1 class="text-3xl lg:text-4xl font-heading font-extrabold pb-6 sm:pb-10">
      The fab 4
    </h1>
    <nav class="relative rounded-lg lg:rounded-xl shadow-[inset_0_0_0_1px_rgba(0,0,0,.2)] inline-flex">
      <RouterLink
        to="/category/for-dogs"
        active-class="[&>span]:font-bold text-white before:max-w-[300px] before:max-h-[50px] before:!w-full  before:!h-full before:!left-0 before:opacity-100 before:!top-0 hover:no-underline"
        class="relative transition-all py-1.5 lg:py-2.5 px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg lg:rounded-xl leading-5 after:content-['For_Dogs'] after:block after:font-bold inline-block after:h-0 after:overflow-hidden after:invisible before:content-[''] before:absolute before:w-0 before:h-0 before:max-w-10 before:max-h-10 before:bg-orange-gradient before:left-1/2 before:transition-all before:rounded-lg lg:before:rounded-xl before:opacity-0 before:top-1/2 hover:underline">
        <span class="z-10 relative">For Dogs</span>
      </RouterLink>
      <RouterLink
        to="/category/for-humans"
        active-class="[&>span]:font-bold text-white before:max-w-[300px] before:max-h-[50px] before:!w-full  before:!h-full before:!left-0 before:opacity-100 before:!top-0 hover:!no-underline"
        class="relative transition-all py-1.5 lg:py-2.5 px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg lg:rounded-xl leading-5 after:content-['For_Dogs'] after:block after:font-bold inline-block after:h-0 after:overflow-hidden after:invisible before:content-[''] before:absolute before:w-0 before:h-0 before:max-w-10 before:max-h-10 before:bg-orange-gradient before:left-1/2 before:transition-all before:rounded-lg lg:before:rounded-xl before:opacity-0 before:top-1/2 hover:underline">
        <span class="z-10 relative">For Humans</span>
      </RouterLink>
    </nav>
  </header>
</template>
