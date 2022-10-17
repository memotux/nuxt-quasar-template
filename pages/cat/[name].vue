<script setup lang="ts">
const {
  params: { name },
} = useRoute()
const { taxonomy } = useAppConfig()
const { title } = taxonomy.category.find((t: any) => t.name === name)
const description = `Publicaciones en categoría ${title}`
useHead({
  title: `${title} | Categorías`,
  meta: [{ name: 'description', content: description }],
})
</script>

<template>
  <section :aria-label="description">
    <ContentDoc />
  </section>
</template>
