<template>
  <QLayout view="hHh lpR fFf">
    <TheHeader />
    <TheSideBar />
    <QPageContainer>
      <QPage class="q-pa-lg">
        <slot />
      </QPage>
    </QPageContainer>
    <TheFooter />
  </QLayout>
</template>
