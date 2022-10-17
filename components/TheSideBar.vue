<script setup lang="ts">
const ui = useUI()
</script>

<template>
  <QDrawer v-model="ui.rightDrawerOpen" side="right" behavior="mobile" bordered>
    <TheMenu :vertical="true" icons>
      <QSeparator />
      <QExpansionItem label="Categorias">
        <MenuItemsTax tax="category" />
      </QExpansionItem>
      <QExpansionItem label="Etiquetas">
        <MenuItemsTax tax="tag" />
      </QExpansionItem>
    </TheMenu>
  </QDrawer>
</template>
