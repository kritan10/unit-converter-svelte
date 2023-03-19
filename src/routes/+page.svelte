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
				/>
				<ToggleButton
					button={Converter.MassConverter}
					{currentButton}
					{toggleButton}
					buttonLabel="Mass Converter"
				/>
				<ToggleButton
					button={Converter.VolumeConverter}
					{currentButton}
					{toggleButton}
					buttonLabel="Volume Converter"
				/>
			</div>
			
			<div class='converter'>
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
	main {
		height: 70vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.root {
		background-color: rgba(0, 0, 0, 0.1);
		padding-bottom: 28px;
		width: 50vw;
		height: 60vh;
		border-radius: 16px;
	}

	.toggle-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.converter{
		padding: 0px 40px;
	}
</style>
