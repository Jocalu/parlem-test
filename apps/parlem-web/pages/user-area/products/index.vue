<template>
	<section
		class="container-responsive"
		v-if="userProductsState.kind === 'LoadedUserProductsState'"
	>
		<pages-navigation class="mt-4" />

		<h2 class="mt-6" v-text="userAreaProductsTitle" />
		<p class="mt-2" v-text="userAreaProductsText" />

		<div class="mt-6">
			<div
				class="user-area__products-wrapper"
				v-for="product in userProductsState.userProducts"
			>
				<subtitle-underlined :text="subtitle(product.productTypeName)" />

				<div class="user-area__data px-4 mb-4">
					<text-labeled
						:label="userAreaProductsNameText"
						:text="product.productName"
					/>
					<text-labeled
						:label="userAreaProductsSoldAtText"
						:text="product.soldAt"
					/>
				</div>
			</div>
		</div>
	</section>
	<section
		class="container-responsive"
		v-if="userProductsState.kind === 'ErrorUserProductsState'"
	>
		<p class="mt-2" v-text="userProductsState.error" />
	</section>
</template>

<script lang="ts" setup>
import { useUserProducts } from '~~/infrastructure/presentation/useUserProducts'
import {
	adsl,
	mobileLines,
	otherProducts,
	userAreaProductsNameText,
	userAreaProductsSoldAtText,
	userAreaProductsText,
	userAreaProductsTitle,
} from '~~/locales/ca.json'

const { getUserProducts, userProductsState } = useUserProducts()

const fakeUserId = '11111'

onBeforeMount(() => {
	if (userProductsState.value.kind !== 'LoadedUserProductsState') {
		getUserProducts(fakeUserId)
	}
})

const subtitle = (text: string) => {
	if (text === 'ftth') {
		return adsl
	}

	if (text === 'lm') {
		return mobileLines
	}

	return otherProducts
}
</script>
