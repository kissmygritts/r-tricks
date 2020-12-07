<template>
  <div
    class="relative overflow-hidden mt-2 border border-black z-0 bg-green-100"
  >
    <div class="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
      <main class="mt-16 mx-auto max-w-7xl px-4 sm:px-6">
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div
            class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:pl-12 lg:flex lg:flex-col lg:justify-center"
          >
            <h1>
              <span
                class="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base"
              >
                A few lines of code
              </span>
              <span
                class="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl"
              >
                <span class="block text-gray-900">Just enough R to </span>
                <span class="block text-indigo-600">get started</span>
              </span>
            </h1>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              There are so many different way to do things in R sometimes all
              you need is a quick reminder. Hopefully this collection of
              snippets will help you get started.
            </p>
          </div>
          <div
            class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <div
              class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"
            >
              <div
                class="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <img class="w-full" src="img/carbon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>
