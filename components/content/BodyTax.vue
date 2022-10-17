<script setup lang="ts">
import type { ContentPost } from '~~/types'

const props = defineProps<{ tax: 'category' | 'tag'; name: string }>()

const { taxonomy } = useAppConfig()

const { title } = taxonomy[props.tax].find((t: any) => t.name === props.name)
const { data: posts } = await useAsyncData(`${props.tax}:${props.name}`, () =>
  queryContent<ContentPost>('/')
    .where({ [props.tax]: { $contains: title }, status: { $eq: 'publish' } })
    .sort({ date: -1 })
    .find()
)

const taxTitle =
  props.tax === 'category' ? `Categoría: ${title}` : `Etiqueta: ${title}`
</script>

<template>
  <header>
    <h1>{{ taxTitle }}</h1>
  </header>
  <div class="row q-gutter-sm justify-center items-stretch">
    <CardPost
      v-for="post in posts"
      class="col-11 col-sm-5 col-md-3"
      tag="article"
      :key="post._id"
      :post="post"
    />
  </div>
</template>
