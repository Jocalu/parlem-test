<template>
	<div class="text-labeled my-4">
		<p class="text-labeled__label" v-text="label" />
		<strong v-text="text" />
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	label: string
	text: string
}>()
</script>

<style lang="scss" src="./TextLabeled.scss"></style>
