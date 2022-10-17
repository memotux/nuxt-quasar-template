<script setup lang="ts">
import ProseImg from '~~/components/content/ProseImg.vue'

const route = useRoute()

const [prev, next] = await queryContent().where({ status: 'publish' }).only(['_path', 'title', 'navigation']).sort({ date: 1 }).findSurround(route.path)

const isPageCurriculum = computed(() => route.path.includes('curriculum') && route.path !== '/curriculum')
const showPrev = computed(() => prev && !prev._path.startsWith('/cat') && !prev._path.startsWith('/tag') && prev._path !== '/acerca')
const showNext = computed(() => next && !next._path.startsWith('/cat') && !next._path.startsWith('/tag') && next._path !== '/acerca')
</script>

<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <article class="post container q-mx-auto">
        <header>
          <ClientOnly v-if="doc.thumbnail">
            <ProseImg :src="doc.thumbnail" :alt="doc.title" width="100%" />
          </ClientOnly>
          <h1>{{ doc.title }}</h1>
          <div v-if="!isPageCurriculum" class="meta flex q-gutter-sm flex-center q-mb-lg">
            <PostMeta :date="doc.date" :category="doc.category" :tag="doc.tag" />
          </div>
        </header>
        <ContentRenderer :value="doc" />
        <QSeparator />
        <footer>
          <IndexCV v-if="isPageCurriculum" />
          <div class="row justify-between align-center q-my-lg">
            <div class="col-4 col-lg-3">
              <QBtn :to="prev._path" size="md" outline color="terciary" v-if="showPrev">
                <QIcon left size="md" name="fa-solid fa-arrow-left" />
                <span>{{ prev.navigation?.title || prev.title }}</span>
              </QBtn>
            </div>
            <div class="col-4 col-lg-3">
              <QBtn :to="next._path" size="md" outline color="terciary" v-if="showNext">
                <span>{{ next.navigation?.title || next.title }}</span>
                <QIcon right size="md" name="fa-solid fa-arrow-right" />
              </QBtn>
            </div>
          </div>
        </footer>
      </article>
    </ContentDoc>
  </div>
</template>

<style lang="scss">
.post {
  .meta {
    text-align: center;
    border-top: 1px solid #4f5b69;
    border-bottom: 1px solid #4f5b69;
    padding: 1rem 0;
  }

  ol,
  ol ol {
    counter-reset: deepList;
    list-style-type: none;

    li::before {
      counter-increment: deepList;
      content: counters(deepList, '.') ') ';
      margin-left: -2rem;
    }

    li>ol {
      padding-left: 1rem;
    }
  }
}
</style>
