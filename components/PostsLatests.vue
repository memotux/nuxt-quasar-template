<script setup lang="ts">
import type { ContentPost } from '~~/types'

const { data: latests } = await useAsyncData('latests', () =>
  queryContent<ContentPost>('/')
    .where({ type: 'post', status: 'publish' })
    .sort({ date: -1 })
    .limit(6)
    .find()
)
</script>

<template>
  <section aria-label="Últimas Publicaciones">
    <h2>Publicaciones</h2>
    <div class="row q-gutter-sm justify-center">
      <CardPost
        v-for="post in latests"
        class="col-11 col-sm-5 col-md-3"
        tag="article"
        :post="post"
      />
    </div>
  </section>
</template>
