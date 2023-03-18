<script>
	import AreaConverter from '../lib/converter_components/AreaConverter.svelte';
	import MassConverter from '../lib/converter_components/MassConverter.svelte';
	import VolumeConveter from '../lib/converter_components/VolumeConveter.svelte';

	const Converter = {
		AreaConverter: 'a',
		MassConverter: 'm',
		VolumeConverter: 'v'
	};
	Object.freeze(Converter);
	// const today = new Date();

	let currentButton = Converter.AreaConverter;
</script>

<body>
	<header>
		<h1>Nepali Unit Converter</h1>
		<!-- {today} -->
	</header>
	<main>
		<div class="root">
			<div class="toggle-bar">
				<button
					class:active={currentButton === Converter.AreaConverter}
					on:click={() => (currentButton = Converter.AreaConverter)}
				>
					Area Converter
				</button>
				<button
					class:active={currentButton === Converter.MassConverter}
					on:click={() => (currentButton = Converter.MassConverter)}
				>
					Weight Converter
				</button>
				<button
					class:active={currentButton === Converter.VolumeConverter}
					on:click={() => (currentButton = Converter.VolumeConverter)}
				>
					Volume Converter
				</button>
			</div>

			{#if currentButton === Converter.AreaConverter}
				<AreaConverter />
			{:else if currentButton === Converter.MassConverter}
				<MassConverter />
			{:else if currentButton === Converter.VolumeConverter}
				<VolumeConveter />
			{/if}
		</div>
	</main>
</body>

<style>
	main {
		height: 70vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.root {
		border: 1px solid blue;
		height: 50vh;
		width: 50vw;
	}

	.active {
		background-color: #ff3e00;
		color: white;
	}

	.toggle-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.toggle-bar button {
		width: 100%;
		padding: 20px 0px;
		cursor: pointer;
		border-radius: 0;
	}
</style>
