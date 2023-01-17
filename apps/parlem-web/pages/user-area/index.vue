<template>
  <section class="container-responsive">
    <pages-navigation class="mt-4" />

    <h2 class="mt-6" v-text="userAreaDataTitle" />
    <p class="mt-2" v-text="userAreaDataText" />

    <div class="user-area mt-6">
      <div class="user-area__data-wrapper">
        <subtitle-underlined :text="userAreaDataContact" />

        <div class="user-area__data px-4">
          <text-labeled
            class="user-area__data--full-width"
            :label="userAreaDataDocumentNumber"
            text="Parlem"
          />
          <text-labeled :label="userAreaDataName" text="Parlem" />
          <text-labeled :label="userAreaDataSurname" text="Parlem" />
          <text-labeled :label="userAreaDataPhone" text="Parlem" />
          <text-labeled :label="userAreaDataEmail" text="Parlem" />
        </div>
      </div>

      <div class="user-area__data-wrapper">
        <subtitle-underlined :text="userAreaDataAddress" />

        <div class="user-area__data px-4">
          <text-labeled
            class="user-area__data--full-width"
            :label="userAreaDataAddress"
            text="Parlem"
          />
          <text-labeled :label="userAreaDataPostalCode" text="Parlem" />
          <text-labeled :label="userAreaDataCity" text="Parlem" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  userAreaDataTitle,
  userAreaDataName,
  userAreaDataSurname,
  userAreaDataText,
  userAreaDataContact,
  userAreaDataAddress,
  userAreaDataDocumentNumber,
  userAreaDataEmail,
  userAreaDataPhone,
  userAreaDataPostalCode,
  userAreaDataCity,
} from "../../locales/ca.json";
</script>

<style lang="scss" src="./UserArea.scss"></style>
