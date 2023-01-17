<template>
	<section class="container-responsive">
		<h2 class="mt-4" v-text="pageNotFound" />
		<p class="mt-2" v-text="pageNotFoundText" />
	</section>
</template>

<script lang="ts" setup>
import { pageNotFound, pageNotFoundText } from '~~/locales/ca.json'
</script>
