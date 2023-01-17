<template>
  <section
    class="container-responsive"
    v-if="userDataState.kind === 'LoadedUserDataState'"
  >
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
            :text="userDataState.userData.docNum"
          />
          <text-labeled
            :label="userAreaDataName"
            :text="userDataState.userData.name"
          />
          <text-labeled
            :label="userAreaDataSurname"
            :text="userDataState.userData.surname"
          />
          <text-labeled
            :label="userAreaDataPhone"
            :text="userDataState.userData.phone"
          />
          <text-labeled
            :label="userAreaDataEmail"
            :text="userDataState.userData.email"
          />
        </div>
      </div>

      <div class="user-area__data-wrapper">
        <subtitle-underlined :text="userAreaDataAddress" />

        <div class="user-area__data px-4">
          <text-labeled
            class="user-area__data--full-width"
            :label="userAreaDataAddress"
            :text="userDataState.userData.address.street"
          />
          <text-labeled
            :label="userAreaDataZipCode"
            :text="userDataState.userData.address.zipCode"
          />
          <text-labeled
            :label="userAreaDataProvince"
            :text="userDataState.userData.address.province"
          />
          <text-labeled
            :label="userAreaDataCity"
            :text="userDataState.userData.address.city"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useUserData } from "~~/infrastructure/presentation/useUserData";

import {
  userAreaDataAddress,
  userAreaDataCity,
  userAreaDataContact,
  userAreaDataDocumentNumber,
  userAreaDataEmail,
  userAreaDataName,
  userAreaDataPhone,
  userAreaDataProvince,
  userAreaDataSurname,
  userAreaDataText,
  userAreaDataTitle,
  userAreaDataZipCode,
} from "~~/locales/ca.json";

const { getUserData, userDataState } = useUserData();

const fakeUserId = "11111";

onBeforeMount(() => {
  if (userDataState.value.kind !== "LoadedUserDataState") {
    getUserData(fakeUserId);
  }
});
</script>

<style lang="scss" src="./UserArea.scss"></style>
