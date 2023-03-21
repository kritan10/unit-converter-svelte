<script>
	import UnitInput from '../UnitInput.svelte';
	import MathFunctions from '../MathFunctions.js';
	import Converter from './Converter.svelte';

	let unit = {
		muthi: 0,
		mana: 0,
		pathi: 0,
		muri: 0,
		dharni: 0,
		kg: 0,
		lbs: 0
	};

	function onChangeHandler(event) {
		let userInput = event.target.value;

		if (isNaN(userInput)) {
			event.target.value = unit[event.target.id];
			return;
		}

		unit[event.target.id] = +userInput;

		if (
			event.target.id === 'muthi' ||
			event.target.id === 'mana' ||
			event.target.id === 'pathi' ||
			event.target.id === 'muri'
		) {
			return;
		}

		if (event.target.id === 'kg') {
			return;
		}
		if (event.target.id === 'lbs') {
			return;
		}
	}
</script>

<Converter>
	<span slot="header">Volume Converter</span>
	<span slot="nep-met">
		<UnitInput id="muthi" value={unit.muthi} {onChangeHandler} />
		<UnitInput id="mana" value={unit.mana} {onChangeHandler} />
		<UnitInput id="pathi" value={unit.pathi} {onChangeHandler} />
		<UnitInput id="muri" value={unit.muri} {onChangeHandler} />
	</span>

	<span slot="int-met">
		<UnitInput id="kg" value={unit.kg} {onChangeHandler} />
		<UnitInput id="lbs" value={unit.lbs} {onChangeHandler} />
	</span>
</Converter>
