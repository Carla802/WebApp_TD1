<script>
	import Editor from './Editor.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type {import('./$types').ActionData} */
	export let form;

</script>

<Editor
	location={data.body}
	errors={form?.errors}
/>
