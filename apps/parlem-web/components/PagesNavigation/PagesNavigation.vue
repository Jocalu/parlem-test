<template>
  <nav class="pages-navigation">
    <ul class="pages-navigation__wrapper" v-for="link in links">
      <nuxt-link :to="link.to" class="pages-navigation__item-wrapper">
        <div :class="['pages-navigation__item', activeClass(link.to)]">
          <li v-text="link.text" />
        </div>
      </nuxt-link>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ROUTES } from "~~/routes/routes";
import { data, products } from "~~/locales/ca.json";

const route = useRoute();

type PageNavigationProps = {
  links?: {
    text: string;
    to: string;
  }[];
};

withDefaults(defineProps<PageNavigationProps>(), {
  links: [
    {
      text: data,
      to: ROUTES.USER_AREA,
    },
    {
      text: products,
      to: ROUTES.USER_AREA_PRODUCTS,
    },
  ],
});

const activeClass = (link: string): string => {
  return link === route.path ? "pages-navigation__item--active" : "";
};
</script>

<style lang="scss" src="./PagesNavigation.scss"></style>
