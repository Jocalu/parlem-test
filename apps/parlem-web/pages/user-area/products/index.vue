<template>
  <section class="container-responsive">
    <nav>
      <ul>
        <nuxt-link to="/user-area">
          <li class="user-area__nav-item" v-text="data" />
        </nuxt-link>
        <nuxt-link to="/user-area/products">
          <li class="user-area__nav-item" v-text="products" />
        </nuxt-link>
      </ul>
    </nav>

    <h2 class="mt-6" v-text="userAreaProductsTitle" />
    <p class="mt-2" v-text="userAreaProductsText" />

    <div class="user-area mt-6">
      <div class="user-area__products-wrapper">
        <subtitle-underlined :text="adsl" />

        <div class="user-area__products px-4"></div>
        <subtitle-underlined :text="mobileLines" />

        <div class="user-area__products px-4"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  userAreaProductsTitle,
  userAreaProductsText,
  mobileLines,
  adsl,
  data,
  products,
} from "../../../locales/ca.json";
</script>

<style lang="scss" src="./UserAreaProducts.scss"></style>
