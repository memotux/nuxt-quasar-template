<script setup lang="ts">
const { data: about } = await useAsyncData('about', () =>
  queryContent('/acerca').findOne()
)
const appConfig = useAppConfig()
</script>

<template>
  <section :aria-label="appConfig.title" id="acerca"
    class="q-my-xl q-pa-lg bg-accent text-h6 inset-shadow text-justify rounded-borders">
    <h2 class="q-ma-none q-mb-lg">{{ about.title }}:</h2>
    <ContentRenderer :value="about" />
  </section>
</template>
