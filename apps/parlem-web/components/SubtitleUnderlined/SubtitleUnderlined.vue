<template>
	<div class="subtitle-underlined">
		<h4 v-text="text" />
		<div class="subtitle-underlined__line" />
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	text: string
}>()
</script>

<style lang="scss" src="./SubtitleUnderlined.scss"></style>
