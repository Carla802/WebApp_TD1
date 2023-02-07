<script>
	import Add from './Add.svelte';

	/** @type {import('./$types').ActionData} */
	export let form;

</script>

<Add
	errors={form?.errors}
/>
