<template>
	<header class="header-default">
		<div class="header-default__content container-responsive">
			<img
				class="header-default__logo"
				src="@/assets/svgs/logo.svg"
				alt="Logo parlem"
			/>
			<nuxt-link v-if="!isHomePage" class="button--primary" :to="ROUTES.HOME">
				<span v-text="returnText" />
			</nuxt-link>
			<nuxt-link v-else class="button--primary" :to="ROUTES.USER_AREA">
				<span v-text="userAreaButtonText" />
			</nuxt-link>
		</div>
	</header>
</template>

<script lang="ts" setup>
import { ComputedRef } from 'vue'

import { ROUTES } from '~~/routes/routes'
import { userAreaButtonText, returnText } from '~~/locales/ca.json'

const route = useRoute()

const isHomePage: ComputedRef<boolean> = computed(() => {
	return route.path === ROUTES.HOME
})
</script>

<style lang="scss" src="./HeaderDefault.scss"></style>
