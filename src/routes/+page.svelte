<script>
	import Counter from './Counter.svelte';
	// let result;
	// console.log({ result });
	async function showRandomNumber() {
		loading = true;
		const res = await fetch('/api/random-number');
		const data = await res.json();
		loading = false;
		number = data + 21;
	}
	let loading = false;
	let number = 0;
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Hello, World</h1>
	<span>The random number is: {data?.number}</span>
	<button on:click={showRandomNumber}>Generate random number</button>
	<div>
		Show the new random number from Client
		<hr />
		{#if loading}
			<span>loading ...</span>
		{:else}
			{number}
		{/if}
	</div>
	<!-- <Counter /> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
