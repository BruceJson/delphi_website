<template>
	<button :style="{padding: btnPadding, 'font-size': btnFontsize}">
		<slot></slot>
	</button>
</template>
<script>
export default {
	name: 'XButton',
	props: {
		padding: {
			type: Array,
			default: [10, 25]
		},
		fontsize: {
			type: Number,
			default: 14
		}
	},
	data() {
		return {};
	},
	computed: {
		btnPadding() {
			const y = this.padding[0];
			const x = this.padding[1];
			return `${y}px ${x}px`;
		},
		btnFontsize() {
			return this.fontsize + 'px';
		}
	}
};

</script>
