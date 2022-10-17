<script setup lang="ts">
const appConfig = useAppConfig()
useHead({
  title: appConfig.subtitle,
})
</script>

<template>
  <div>
    <PostsLatests id="blog" />
    <About class="q-mx-auto container" />
  </div>
</template>
