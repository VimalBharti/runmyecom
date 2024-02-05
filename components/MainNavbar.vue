<template>
  <nav class=' bg-white w-full py-3'>
    <div class='w-full px-4 flex justify-between mx-auto'>
      <div class='logo flex gap-3 items-center'>
        <NuxtLink to="/">
          <img src="/logo.png" alt="runmyecom-logo" class="">
        </NuxtLink>
      </div>
      <div class='flex items-center gap-2'>
        <a href='#' class='text-gray-900 rounded px-3 py-1 text-sm'>Home</a>
        <NuxtLink to='/about' class='text-gray-900 rounded px-3 py-1 text-sm'>About</NuxtLink>
        <a href='#our-service' class='text-gray-900 rounded px-3 py-1 text-sm'>Services</a>
        <!-- <a href='#' class='text-gray-900 rounded px-3 py-1 text-sm'>Pricing</a> -->
        <a href='#contact-us' class='text-white bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg px-3 py-1 text-sm'>Contact</a>
      </div>
    </div>
  </nav>
</template>

<script setup>

</script>

<style>

</style>