<template>
  <section class="container-responsive">
    <pages-navigation class="mt-4" />

    <h2 class="mt-6" v-text="userAreaProductsTitle" />
    <p class="mt-2" v-text="userAreaProductsText" />

    <div class="user-area mt-6">
      <div class="user-area__data-wrapper">
        <subtitle-underlined :text="adsl" />

        <div class="user-area__data px-4 mb-4">
          <text-labeled :label="userAreaProductsNameText" text="Parlem" />
          <text-labeled :label="userAreaProductsSoldAtText" text="Parlem" />
        </div>

        <subtitle-underlined :text="mobileLines" />

        <div class="user-area__data px-4">
          <text-labeled :label="userAreaProductsNameText" text="Parlem" />
          <text-labeled :label="userAreaProductsSoldAtText" text="Parlem" />
        </div>

        <div class="user-area__data px-4"></div>
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
  userAreaProductsSoldAtText,
  userAreaProductsNameText,
} from "../../../locales/ca.json";
</script>
