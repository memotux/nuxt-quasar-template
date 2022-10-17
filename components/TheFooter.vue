<script setup lang="ts">
const $q = useQuasar()
const appConfig = useAppConfig()
const dateYear = computed(() => new Date().getFullYear())
const rowOrColumn = computed(() => ({ column: $q.screen.lt.sm && $q.platform.is.mobile, row: $q.screen.gt.sm || $q.platform.is.desktop }))
</script>
<template>
  <QFooter elevated class="absolute bg-dark text-body text-center q-pa-md">
    <div id="contacto" class="q-mt-sm q-mb-lg q-gutter-sm container q-mx-auto" :class="rowOrColumn">
      <div class="col flex items-center">
        <div class="col text-h6 flex items-center">
          <QIcon tag="span" name="store" size="lg" class="q-mr-sm" />
          <address class="col text-h6" style="display: inline;">{{ appConfig.contact.address }}</address>
        </div>
      </div>
      <div class="col flex items-center">
        <div class="col text-h6">
          <QIcon tag="span" name="email" size="lg" class="q-mr-sm" />
          <NuxtLink :to="`mailto:${appConfig.contact.mail}`">
            {{ appConfig.contact.mail }}
          </NuxtLink>
        </div>
      </div>
      <QList class="col-4 flex flex-center">
        <QItem v-for="item in appConfig.social" :key="`footer:social:${item.name}`">
          <QItemSection>
            <NuxtLink :to="item.url">
              <QIcon color="body" :name="`fa-brands fa-${item.name}`" size="xl" />
            </NuxtLink>
          </QItemSection>
        </QItem>
      </QList>
    </div>
    <QSeparator color="accent" class="q-mx-auto" style="max-width: 80%;" />
    <h6 class="q-ma-none text-accent">{{ appConfig.subtitle }}</h6>
    <p class="text-accent">
      <QIcon name="fa-regular fa-copyright" /> {{ dateYear }} - Sitio web personal de Arturo Mendez
      Azahar, Ciudad de Tejutla, Departamento de Chalatenango. Todos los derechos reservados. Desarrollado con <NuxtLink
        to="https://nuxtjs.org" class="text-accent">Nuxt</NuxtLink>
    </p>
  </QFooter>
</template>
