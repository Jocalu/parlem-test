<template>
  <main class="main">
    <header-default />
    <slot />
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
