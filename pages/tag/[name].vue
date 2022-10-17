<script setup lang="ts">
const {
  params: { name },
} = useRoute()
const { taxonomy } = useAppConfig()
const { title } = taxonomy.tag.find((t: any) => t.name === name)
const description = `Publicaciones en etiqueta ${title}`
useHead({
  title: `${title} | Etiquetas`,
  meta: [{ name: 'description', content: description }],
})
</script>

<template>
  <section :aria-label="description">
    <ContentDoc />
  </section>
</template>
