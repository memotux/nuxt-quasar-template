<script setup lang="ts">
import { toggleRightDrawer } from '#imports'
const { title } = useAppConfig()
</script>

<template>
  <QHeader elevated class="bg-primary text-white">
    <QToolbar>
      <QToolbarTitle shrink>
        <QBtn to="/" flat dense square>
          <QAvatar square>
            <img src="/icons/icon.png" />
          </QAvatar>
          <h1 class="text-h6 q-m-none q-ml-sm">{{ title }}</h1>
        </QBtn>
      </QToolbarTitle>
      <QSpace />
      <TheMenu class="desktop-only">
        <QSeparator vertical />
        <QBtn color="body" label="Categorias" flat>
          <QMenu transition-show="jump-down" transition-hide="jump-up">
            <QList style="min-width: 100px">
              <MenuItemsTax tax="category" />
            </QList>
          </QMenu>
        </QBtn>
        <QBtn color="body" label="Etiquetas" flat>
          <QMenu transition-show="jump-down" transition-hide="jump-up">
            <QList style="min-width: 100px">
              <MenuItemsTax tax="tag" />
            </QList>
          </QMenu>
        </QBtn>
      </TheMenu>

      <QBtn dense flat round icon="menu" class="mobile-only" @click="toggleRightDrawer" />
    </QToolbar>
  </QHeader>
</template>
