<template>
	<nuxt-layout>
		<nuxt-page />
	</nuxt-layout>
</template>

<script lang="ts" setup>
useHead({
	title: 'Parlem test',
	meta: [
		{
			hid: 'description',
			name: 'description',
			content: 'Parlem test',
		},
	],
})
</script>
