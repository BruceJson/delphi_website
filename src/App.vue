<template>
	<div id="app" class='page_layout fixed_header'>
		<div class='layout_content'>
			<x-header></x-header>
			<x-body></x-body>
			<x-footer></x-footer>
		</div>
	</div>
</template>

<script>
import XHeader from '@/views/layout/xheader';
import XBody from '@/views/layout/xbody';
import XFooter from '@/views/layout/xfooter';
export default {
	name: 'App',
	components: {
		XHeader,
		XBody,
		XFooter
	}
}

</script>

<style>


</style>
