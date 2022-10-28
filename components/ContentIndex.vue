<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Indice'
  },
  index: {
    type: [Object, undefined],
    default: {
      where: {
        _path: {
          $contains: 'posts',
        },
        status: 'publish',
      },
      sort: { date: 1 },
      only: ['title', '_path', '_id', 'navigation']
    }
  }
})
</script>

<template>
  <h3 class="text-h5 text-center">{{title}}</h3>
  <ContentList :query="index" v-slot="{ list }">
    <QSeparator style="max-width: 80%; margin: 0 auto" />
    <ul class="text-columns text-columns-md-2 container q-mx-auto">
      <li v-for="(post) in list" :key="post._id">
        <NuxtLink class="text-h6" :to="`${post._path}`">{{
        post.navigation?.title || post.title.split(' | ')[0]
        }}</NuxtLink>
      </li>
    </ul>
  </ContentList>
</template>