<script setup lang="ts">
import { qdate } from '#imports'

defineProps<{ date: string; category?: string[]; tag?: string[] }>()

const { taxonomy } = useAppConfig()
const taxName = (tax: 'category' | 'tag', title: string) => {
  const name = taxonomy[tax].find((t) => t.title === title)?.name
  if (!name) {
    return undefined
  }
  return `/${tax === 'tag' ? 'tag' : 'cat'}/${name}`
}

const { formatDate } = qdate
</script>

<template>
  <QChip icon="event" color="body" text-color="secondary"
    >Publicado: {{ formatDate(date, 'DD/MM/YYYY') }}</QChip
  >
  <template v-for="tax in category">
    <slot name="category" :tax="tax" :taxName="taxName('category', tax)">
      <NuxtLink :to="taxName('category', tax)"
        ><QChip icon="topic" color="terciary" clickable>{{
          tax
        }}</QChip></NuxtLink
      >
    </slot>
  </template>
  <template v-for="tax in tag">
    <slot name="tag" :tax="tax" :taxName="taxName('tag', tax)">
      <NuxtLink :to="taxName('tag', tax)"
        ><QChip icon="label" color="accent" clickable>{{
          tax
        }}</QChip></NuxtLink
      >
    </slot>
  </template>
</template>
