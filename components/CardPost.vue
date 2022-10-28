<script setup lang="ts">
import ProseImg from './content/ProseImg.vue'
import type { ContentPost } from '~~/types'
defineProps<{
  post?: ContentPost
}>()
</script>

<template>
  <QCard>
    <QCardSection v-if="post.thumbnail">
      <NuxtLink :to="post._path">
        <ClientOnly>
          <ProseImg :src="post.thumbnail" :alt="post.title" width="100%" />
        </ClientOnly>
      </NuxtLink>
    </QCardSection>
    <QCardSection>
      <slot name="header">
        <h3 class="q-ma-none">{{ post.title ?? 'The Title' }}</h3>
      </slot>
    </QCardSection>
    <slot name="metadata" :post="post">
      <QCardSection class="row q-pa-sm q-gutter-sm items-center">
        <PostMeta :date="post.date" :category="post.category" :tag="post.tag" />
      </QCardSection>
    </slot>
    <slot>
      <QCardSection>
        <p>{{ post.description ?? 'The Description' }}</p>
      </QCardSection>
    </slot>
  </QCard>
</template>
