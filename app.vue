<template>
  <div>
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
    <NuxtPage />

    <div>
      <h4>DATA TASKS</h4>
    </div>

    <!-- <NuxtLayout>
    </NuxtLayout> -->
  </div>
</template>
<script setup>
const { $directus } = useNuxtApp()

console.log($directus)
</script>