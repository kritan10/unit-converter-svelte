<script>
	import AreaConverter from '../lib/converter_components/AreaConverter.svelte';
	import MassConverter from '../lib/converter_components/MassConverter.svelte';
	import ToggleButton from '../lib/converter_components/ToggleButton.svelte';
	import VolumeConveter from '../lib/converter_components/VolumeConveter.svelte';

	const Converter = {
		AreaConverter: 'a',
		MassConverter: 'm',
		VolumeConverter: 'v'
	};
	Object.freeze(Converter);
	// const today = new Date();

	let currentButton = Converter.AreaConverter;

	function toggleButton(value) {
		currentButton = value;
	}
</script>

<body>
	<header>
		<h1>Nepali Unit Converter</h1>
		<!-- {today} -->
	</header>
	<main>
		<div class="root">
			<div class="toggle-bar">
				<ToggleButton
					button={Converter.AreaConverter}
					{currentButton}
					{toggleButton}
					buttonLabel="Area Converter"
					buttonClass="first"
				/>
				<ToggleButton
					button={Converter.MassConverter}
					{currentButton}
					{toggleButton}
					buttonLabel="Mass Converter"
					buttonClass=""
				/>
				<ToggleButton
					button={Converter.VolumeConverter}
					{currentButton}
					{toggleButton}
					buttonLabel="Volume Converter"
					buttonClass="last"
				/>
			</div>

			<div class="converter">
				{#if currentButton === Converter.AreaConverter}
					<AreaConverter />
				{:else if currentButton === Converter.MassConverter}
					<MassConverter />
				{:else if currentButton === Converter.VolumeConverter}
					<VolumeConveter />
				{/if}
			</div>
		</div>
	</main>
</body>

<style>
	header {
		border-bottom: 1px solid black;
		margin: 18px;
	}

	body {
		margin: 0;
		padding: 0;
		height: 100vh;
		font-family: 'Poppins', sans-serif;
	}

	h1 {
		font-family: 'Roboto Condensed', sans-serif;
	}

	main {
		height: 80vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.root {
		/* border: 1px solid black; */
		background-color: rgba(152, 144, 144, 0.1);
		padding-bottom: 28px;
		width: 50vw;
		height: 60vh;
		border-radius: 12px;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
	}

	.toggle-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.converter {
		padding: 0px 40px;
	}
</style>
