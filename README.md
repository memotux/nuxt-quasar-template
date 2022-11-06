# Nuxt Quasar Starter

This is an Starter Template for Nuxt that use Quasar Framework UI and `nuxt-quasar-vite`.

## Install

```sh
# <nuxt-app> it's the name of your project folder
npx nuxi init -t gh:memotux/nuxt-quasar-template <nuxt-app>

cd <nuxt-app>

yarn install
```

## Content

In this template are configured:

- Default Layout: `layouts/defaults.vue`
- Default Pages like `index.vue`
- Plugins: `vue-gtag` and `vue-router` ScrollBehavior
- Use `@nuxt/content@^2.1.1` and `@nuxt/image-edge`, and modifies `ProseImg` to use `QImg`.

## Components

- Content
  - Facebook
  - ProseImg
  - Timeline
  - TimelineEntry
  - Twitter
  - Youtube
- CardPost
- ContentIndex
- PostMeta
- PostsLatests
- TheFooter
- TheHeader
- TheSidebar

## Composables

- UI
  - useUI
  - toggleRightDrawer
  - formatDate
