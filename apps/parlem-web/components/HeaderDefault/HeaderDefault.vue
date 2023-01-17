<template>
  <header class="header-default">
    <div class="header-default__content container-responsive">
      <img
        class="header-default__logo"
        src="@/assets/svgs/logo.svg"
        alt="Logo parlem"
      />
      <nuxt-link class="button--primary" to="/user-area">
        <span v-text="userAreaButtonText" />
      </nuxt-link>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { userAreaButtonText } from "../../locales/ca.json";
</script>

<style lang="scss" src="./HeaderDefault.scss"></style>
